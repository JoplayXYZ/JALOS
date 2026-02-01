# JALOS
JustAnotherLoaderOverlayScript (JALOS) - A Clean, Customizeable and Open Source javascript loading overlay

## Useage:
```js
    import { showLoader } from 'https://cdn.jsdelivr.net/gh/joplayxyz/jalos@latest/jalos.js';

    showLoader(2000, '<img src="/images/logo.png"><br>')
```

## Basic CSS template:
```css
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
```
