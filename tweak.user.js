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
// @version    1.0.1
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
GM_addStyle(GM_getResourceText("Style"));

const INTER = 100;

const Types = [
  {
  Pattern: document.URL.includes("gram.com/p/"),
  Condition: `svg[aria-label="Unlike"]`,
  Action: `.fr66n button.wpO6b`,
  }
]

function action(condition, action) {
  !document.querySelector(condition)
    ? document.querySelector(action).click()
    : setInterval(function () {
        close();
      }, INTER);
}

Types.forEach(type => {
  if (URL.includes(type.Pattern))
  setInterval(function () {
    action(type.Condition, type.Action);
  }, INTER);  
});
