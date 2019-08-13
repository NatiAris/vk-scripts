// ==UserScript==
// @name         vk-no-audio-ads
// @namespace    https://github.com/NatiAris/
// @version      0.3
// @description  bb vk audio ads!
// @author       NatiAris
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    vk.audioAdsConfig.enabled = false;
}, false);

