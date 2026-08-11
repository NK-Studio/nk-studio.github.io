(function () {
    "use strict";

    const scriptUrl = document.currentScript?.src;
    if (!scriptUrl) return;

    const packageRootUrl = new URL("../", scriptUrl);
    const configUrl = new URL("switcher.config.json", packageRootUrl);

    fetch(configUrl)
        .then(function (response) {
            if (!response.ok) throw new Error("Switcher configuration was not found.");
            return response.json();
        })
        .then(initialize)
        .catch(function () {
            renderVersionLabel({
                displayName: thisPackageMetaData.displayTitle || thisPackageMetaData.name,
                version: ""
            });
        });

    function initialize(config) {
        const route = detectRoute(config, location.pathname);
        const currentVersion = route
            ? findCurrentVersion(config.versions, route)
            : config.versions.find(function (entry) {
                return entry.docsVersion === thisPackageMetaData.version;
            });

        if (!route || !currentVersion) {
            renderVersionLabel({
                displayName: config.displayName,
                version: thisPackageMetaData.version
            });
            return;
        }

        renderLanguageSwitcher(config, route, currentVersion);
        renderVersionSwitcher(config, route, currentVersion);
    }

    function detectRoute(config, pathname) {
        const requestedLayout = config.layout || "auto";

        if (requestedLayout !== "local") {
            const hosted = detectHostedRoute(config, pathname);
            if (hosted) return hosted;
        }

        if (requestedLayout !== "hosted") {
            const local = detectLocalRoute(pathname);
            if (local) return local;
        }

        return null;
    }

    function detectHostedRoute(config, pathname) {
        const marker = `/Packages/${config.packageName}@`;
        const markerIndex = pathname.indexOf(marker);
        if (markerIndex < 0) return null;

        let basePath = pathname.slice(0, markerIndex);
        let language = "en";
        if (basePath === "/kr" || basePath.endsWith("/kr")) {
            language = "kr";
            basePath = basePath.slice(0, -3);
        }

        const versionStart = markerIndex + marker.length;
        const slashIndex = pathname.indexOf("/", versionStart);
        const hostedVersion = slashIndex < 0
            ? pathname.slice(versionStart)
            : pathname.slice(versionStart, slashIndex);
        const pagePath = slashIndex < 0 ? "" : pathname.slice(slashIndex + 1);

        return {
            layout: "hosted",
            basePath: normalizeBasePath(basePath),
            language: language,
            version: hostedVersion,
            pagePath: pagePath
        };
    }

    function detectLocalRoute(pathname) {
        const match = pathname.match(/^(.*)\/(en|kr)\/(\d+\.\d+\.\d+)\/(.*)$/);
        if (!match) return null;

        return {
            layout: "local",
            basePath: normalizeBasePath(match[1]),
            language: match[2],
            version: match[3],
            pagePath: match[4]
        };
    }

    function normalizeBasePath(path) {
        if (!path || path === "/") return "";
        return path.endsWith("/") ? path.slice(0, -1) : path;
    }

    function findCurrentVersion(versions, route) {
        return versions.find(function (entry) {
            return route.layout === "hosted"
                ? entry.hostedVersion === route.version
                : entry.docsVersion === route.version;
        });
    }

    function buildUrl(config, route, language, version) {
        const pagePath = route.pagePath ? `/${route.pagePath}` : "/";
        if (route.layout === "hosted") {
            const languagePrefix = language === "en" ? "" : `/${language}`;
            return `${route.basePath}${languagePrefix}/Packages/${config.packageName}@${version.hostedVersion}${pagePath}`;
        }

        return `${route.basePath}/${language}/${version.docsVersion}${pagePath}`;
    }

    function renderLanguageSwitcher(config, route, currentVersion) {
        if (!Array.isArray(config.languages) || config.languages.length <= 1) return;

        const container = document.createElement("div");
        container.id = "language-switcher";

        const label = document.createElement("label");
        label.htmlFor = "language-select";
        label.append("Language: ");

        const select = document.createElement("select");
        select.id = "language-select";

        config.languages.forEach(function (language) {
            const option = document.createElement("option");
            option.className = `language-switcher-language-${language.id}`;
            option.value = buildUrl(config, route, language.id, currentVersion);
            option.textContent = language.label;
            option.selected = language.id === route.language;
            select.appendChild(option);
        });

        select.addEventListener("change", function () {
            location.href = select.value + location.search + location.hash;
        });

        label.appendChild(select);
        container.appendChild(label);
        document.getElementById("breadcrumb")?.appendChild(container);
        localStorage.setItem("docs-lang", route.language);
    }

    function renderVersionSwitcher(config, route, currentVersion) {
        if (!Array.isArray(config.versions) || config.versions.length <= 1) {
            renderVersionLabel({
                displayName: config.displayName,
                version: currentVersion.docsVersion
            });
            return;
        }

        const container = document.createElement("div");
        container.id = "version-switcher-select";
        container.innerHTML = [
            '<div class="component-select">',
            `  <div id="component-select-current-display" class="component-select__current">${config.displayName} ${currentVersion.docsVersion}</div>`,
            '  <ul id="version-switcher-ul" class="component-select__options-container"></ul>',
            '</div>'
        ].join("\n");

        const list = container.querySelector("#version-switcher-ul");
        config.versions
            .filter(function (version) { return version.docsVersion !== currentVersion.docsVersion; })
            .sort(function (a, b) {
                return b.docsVersion.localeCompare(a.docsVersion, "en-US", { numeric: true });
            })
            .forEach(function (version) {
                const link = document.createElement("a");
                link.style.color = "#000";
                link.href = buildUrl(config, route, route.language, version);

                const item = document.createElement("li");
                item.className = "component-select__option";
                item.style.justifyContent = "space-between";
                item.append(version.docsVersion);

                if (version.unityVersion) {
                    const badge = document.createElement("span");
                    badge.style.color = "#aaa";
                    badge.textContent = `${version.unityVersion}+`;
                    item.appendChild(badge);
                }

                link.appendChild(item);
                list.appendChild(link);
            });

        const current = container.querySelector("#component-select-current-display");
        current.addEventListener("click", function (event) {
            event.stopPropagation();
            current.classList.toggle("component-select__current--is-active");
        });
        document.addEventListener("click", function () {
            current.classList.remove("component-select__current--is-active");
        });

        document.getElementById("breadcrumb")?.appendChild(container);
    }

    function renderVersionLabel(value) {
        const label = document.createElement("p");
        label.style.margin = "10px 0";
        const strong = document.createElement("b");
        strong.textContent = [value.displayName, value.version].filter(Boolean).join(" ");
        label.appendChild(strong);
        document.getElementById("breadcrumb")?.appendChild(label);
    }
})();
