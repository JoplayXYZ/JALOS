// JALOS.JS - JustAnotherLoaderOverlayScript
// https://github.com/JoplayXYZ/Jalos
// created by JOPLAY.XYZ @ CHJK STUDIOS (https://chjk.xyz) 
// Copyright (c) 2025-2026 JOPLAYXYZDEV
// Licensed under the MIT License

export function showLoader(MIN_TIME, LOADER_HTML) {
    // Prevent double injection
    if (document.getElementById("loader-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "loader-overlay";

    if (LOADER_HTML) {
        overlay.innerHTML = LOADER_HTML;
    } else {
        overlay.innerHTML = `<p>please specify the LOADER_HTML variable</p><br><p>JALOS.JS - https://github.com/JoplayXYZ/Jalos</p>`;
    }

    document.body.classList.add("loaderplaying");
    document.body.appendChild(overlay);

    const start = Date.now();

    function hideLoader() {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, MIN_TIME - elapsed);
        setTimeout(() => {
            overlay.classList.add("fade-out");
            document.body.classList.remove("loaderplaying");
            setTimeout(() => overlay.remove(), MIN_TIME);
        }, remaining);
    }

    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader);
    }
}
