// ==UserScript==
// @name    don[Pablo]: Auto like Instagram Posts
// @description  don[Pablo]: Auto like Instagram Posts
// @note    don[Pablo]: Auto like Instagram Posts
// ### FILES
// @update      https://raw.githubusercontent.com/donPabloNow/tweaks/main/auto.likes.user.js
// @icon    https://raw.githubusercontent.com/donPabloNow/tweaks/main/auto.likes/icon.svg
// @require https://raw.githubusercontent.com/donPabloNow/tweaks/main/auto.likes/scripts.js
// @resource  CommonStyle   https://raw.githubusercontent.com/donPabloNow/tweaks/main/auto.likes/styles.css
// ### GRANTS
// @grant    GM_getValue
// @grant    GM.getValue
// @grant    GM_setValue
// @grant    GM.setValue
// @grant    GM_addStyle
// @grant    GM_getResourceUrl
// @grant    GM.getResourceUrl
// @grant    GM_xmlhttpRequest
// @grant    GM_getResourceText
// @grant    GM_registerMenuCommand
// @grant    unsafeWindow
// ### INCLUDES
// @include    *://*.dogedoge.com/*
// ### DON PABLO
// @version    1.0.0
// @author    don[Pablo]
// @create     2018-11-25
// @license    MIT-3.0-only\
// @namespace  don@OBEYi.com
// @copyright  2018-2020, MIT
// @home-url   https://OBEYi.com
// @supportURL  https://donPabloNow.com
// @homepageURL  https://donPabloNow.com
// @feedback-url  https://donPabloNow.com/contact
// ==/UserScript==
(function () {
  "use strict";
  setInterval(function () {
    !document.querySelector('svg[aria-label="Unlike"]')
      ? document.querySelector(".fr66n button.wpO6b").click()
      : setTimeout(function () {
          close();
        }, 5000);
  }, 500);
})();
