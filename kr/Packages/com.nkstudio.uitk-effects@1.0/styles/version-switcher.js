// Simple version switcher for this project's /<lang>/<version>/ site structure.
$(function () {
    const VERSIONS = ["1.0.0"];
    const DISPLAY_NAME = "UITK Effects";
    const UNITY_VERSIONS = {
        "1.0.0": "6000.3"
    };

    const pathMatch = location.pathname.match(/\/(en|kr)\/(\d+\.\d+\.\d+)\//);
    if (!pathMatch) return;

    const currentVersion = pathMatch[2];

    if (VERSIONS.length <= 1) {
        $("#breadcrumb").append($(`<p style="margin: 10px 0;"><b>${DISPLAY_NAME} ${currentVersion}</b></p>`));
        return;
    }
});