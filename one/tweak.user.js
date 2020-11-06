// ==UserScript==
// @name    don[Pablo]: One
// @description  don[Pablo]: One
// @note    don[Pablo]: One
// ### FILES
// @update      https://tweaks.obeyi.com/one/tweak.user.js
// @icon    https://tweaks.obeyi.com/one/icon.svg
// @require https://tweaks.obeyi.com/one/scripts.js?v=1.0.01
// @resource  CommonStyle   https://tweaks.obeyi.com/one/styles.css?v=1.0.01
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
// @include    https://www.instagram.com/p/*
// ### DON PABLO
// @version    1.0.01
// @author    don[Pablo]
// @create     2018-11-25
// @license    MIT-3.0-only
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
