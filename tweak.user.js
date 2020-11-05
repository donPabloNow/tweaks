// ==UserScript==
// @name    don[Pablo]: One
// @description  don[Pablo]: One
// @note    don[Pablo]: One
// ### FILES
// @update      https://tweaks.obeyi.com/tweak.user.js
// @icon    https://tweaks.obeyi.com/icon.svg
// @require https://tweaks.obeyi.com/scripts.js
// @resource  Style   https://tweaks.obeyi.com/styles.css
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
// @grant    GM_setClipboard
// @grant    window.close
// @grant    window.focus
// @grant    window.onurlchange
// ### INCLUDES
// @include    *
// ### DON PABLO
<<<<<<< HEAD
<<<<<<< HEAD
// @version    1.0.2
=======
// @version    1.0.0
>>>>>>> parent of 7317a18... update
=======
// @version    1.0.0
>>>>>>> parent of 7317a18... update
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
<<<<<<< HEAD
<<<<<<< HEAD
GM_addStyle(GM_getResourceText("Style"));

function like() {
  !document.querySelector('svg[aria-label="Unlike"]')
    ? document.querySelector(".fr66n button.wpO6b").click()
    : setTimeout(function () {
        close();
      }, 500);
}

if (document.URL.includes("gram.com/p/"))
  setInterval(function () {
    like();
  }, 500);
=======
GM_addStyle(GM_getResourceText ("Style"));
>>>>>>> parent of 7317a18... update
=======
GM_addStyle(GM_getResourceText ("Style"));
>>>>>>> parent of 7317a18... update
