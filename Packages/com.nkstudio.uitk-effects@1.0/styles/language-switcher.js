// Simple language switcher for this project's /en/<version>/ and /kr/<version>/
// sibling site structure. Not dependent on Unity's Packages/metadata registry
// (that version only works on the nk-studio.github.io domain and needs a
// Packages/<name>@<version>/ URL layout).
$(function () {
    const langs = [
        { code: "en", display: "English" },
        { code: "kr", display: "한국어" }
    ];

    const pathMatch = location.pathname.match(/\/(en|kr)\/(\d+\.\d+\.\d+)\//);
    if (!pathMatch) return; // Not served under a recognizable /en/<version>/ or /kr/<version>/ prefix

    const currentLang = pathMatch[1];

    const $switcher = $("<div id='language-switcher'></div>");
    const $label = $("<label for='language-select'>Language: </label>");
    const $select = $("<select id='language-select'></select>");
    $label.append($select);
    $switcher.append($label);

    langs.forEach(function (lang) {
        // Keep the same version segment — only the language prefix changes.
        const targetPath = location.pathname.replace(/\/(en|kr)\/(\d+\.\d+\.\d+)\//, "/" + lang.code + "/$2/");
        const targetUrl = targetPath + location.search + location.hash;
        const selected = lang.code === currentLang ? "selected" : "";
        $select.append(`<option value="${targetUrl}" ${selected}>${lang.display}</option>`);
    });

    $select.on("change", function () {
        location.href = $(this).val();
    });

    $("#breadcrumb").append($switcher);
});
