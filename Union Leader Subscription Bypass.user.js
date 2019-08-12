// ==UserScript==
// @name         Union Leader Subscription Bypass
// @namespace    http://tampermonkey.net/
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @version      1.0
// @description  Removes all popups and elements demanding a UL subscription and shows the entire webpage article.
// @author       Harrison Palmer
// @match        https://www.unionleader.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Close popup.
    $('.close').click();

    // Delete Popup.
    $('.modal-content').remove();

    // Remove Preview.
    $('.subscriber-preview').css('position','');

    // Remove login requirement box.
    $('.subscription-required').remove();

    // Show rest of article.
    $('.subscriber-only').removeClass();
})();
