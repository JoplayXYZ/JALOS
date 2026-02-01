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

/* Basic useage (type="module" required)
    import { showLoader } from 'https://cdn.jsdelivr.net/gh/joplayxyz/jalos@latest/jalos.js';

    showLoader(2000, "/images/logo.png")
*/

/* Basic CSS template
    body.loaderplaying { 
        overflow: hidden; 
    }

    #loader-overlay {
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        backdrop-filter: blur(8px);
        background: #000000 center/cover no-repeat;
        display: flex; justify-content: center; align-items: center;
        z-index: 999999;
        opacity: 1;
        transition: opacity 0.4s ease, filter 0.2s ease, transform 0.2s ease;
        display: flex;
        flex-direction: column;
    }

    #loader-overlay.fade-out {
        opacity: 0;
        pointer-events: none;
        filter: blur(10px);
        transform: scale(1.5);
    }

    #loader-overlay img {
        width: 5rem;
        max-width: 150px;
    }
*/
