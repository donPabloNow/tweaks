// ==UserScript==
// @name    don[Pablo]: Multi Select Facebook Friends
// @description  don[Pablo]: Multi Select Facebook Friends
// @note    don[Pablo]: Multi Select Facebook Friends
// ### FILES
// @update      https://tweaks.obeyi.com/friend.select/tweak.user.js
// @icon    https://tweaks.obeyi.com/friend.select/icon.svg
// @require https://tweaks.obeyi.com/friend.select/scripts.js
// @resource  CommonStyle   https://tweaks.obeyi.com/friend.select/styles.css
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
// @include      *.facebook.com/*
// ### DON PABLO
// @version    1.0.0
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

function replace_msg(x) {
  //$('div.dialog_body').html('Whuuuhuu! ' + x + ' friends has been deleted. Join us at <a href="http://fb.com/webaspirants" rel="nofollow">Naveen</a> for more useful tips/tricks and more!');
  document
    .getElementsByClassName(
      "layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge"
    )
    .item()
    .click();
}
function set_timer() {
  set_checkboxes(0);
  var t = setTimeout(function () {
    set_timer();
  }, 10);
}
set_timer();
function set_checkboxes(COR) {
  var flag_search_result_page = false;
  $("li.fbProfileBrowserListItem.uiListItem").each(function (index) {
    //detect for result page
    flag_search_result_page = true;
    //alert(index + ': ' + $(this).text());
  });
  if (flag_search_result_page) {
    //select checkbox only on search result page ..
    $(
      "div.fbProfileBrowserList ul li.fbProfileBrowserListItem.uiListItem"
    ).each(function (index) {
      var extract_url = $(this).find("div.fwb a").attr("data-hovercard");
      if (!extract_url) {
        extract_url = $(this).find("div.fwb a").attr("ajaxify");
      }
      if (!extract_url) {
        extract_url = "1";
      }
      var profileid = parseInt(/(\d+)/.exec(extract_url)[1], 10);
      if (COR == "0") {
        if (!$(this).find("input").hasClass("mudra_delete")) {
          //protection from adding more than 1 checkbox
          $(this)
            .find("div.fsl")
            .prepend(
              '<input type="checkbox" class="mudra_delete" title="Tick to delete this user." id="' +
                profileid +
                '">'
            );
        }
      } else {
        if (!$(this).find("input").hasClass("mudra_delete")) {
          $(this).find("input").remove();
          $(this)
            .find("div.fwb")
            .prepend(
              '<input type="checkbox" checked="checked" class="mudra_delete" title="Tick to delete this user." id="' +
                profileid +
                '">'
            );
        } else {
          $(this).find("input").prop("checked", true);
        }
      }
    });
  } else {
    //its on main friends page
    $("div.fsl").each(function (index) {
      if ($(this).hasClass("fwb")) {
        var extract_url = $(this).find("a").attr("data-hovercard");
        if (!extract_url) {
          extract_url = $(this).find("a").attr("ajaxify");
        }
        if (!extract_url) {
          extract_url = "1";
        }
        var profileid = parseInt(/(\d+)/.exec(extract_url)[1], 10);
        if (COR == "0") {
          if (!$(this).children().hasClass("mudra_delete")) {
            $(this).prepend(
              '<input type="checkbox" class="mudra_delete" title="Tick to delete this user." id="' +
                profileid +
                '">'
            );
          }
        } else {
          if (!$(this).children().hasClass("mudra_delete")) {
            $(this).find("input").remove();
            $(this).prepend(
              '<input type="checkbox" checked="checked" class="mudra_delete" title="Tick to delete this user." id="' +
                profileid +
                '">'
            );
          } else {
            $(this).find("input").prop("checked", true);
          }
        }
      }
    });
  }
}

function sleep(x) {
  setInterval(function () {
    replace_msg(x);
  }, 100);
}

$("#mass_deleter").live("click", function () {
  var i = 0;
  $(".mudra_delete:checkbox:checked").each(function () {
    i = i + 1; // parseInt('1');
    var profileid = $(this).attr("id");
    var a = document.createElement("script");
    a.innerHTML =
      "new AsyncRequest().setURI('/ajax/profile/removefriendconfirm.php').setData({ uid: " +
      profileid +
      ",norefresh:true }).send();";
    document.body.appendChild(a);
    //document.getElementsByClassName('layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge').item().click();
  });
  if (i == "0") {
    alert("Select atleast some friends to delete first.");
  }
  sleep(i);
  //var bc=document.getElementsByClassName('layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge');
  //alert(bc.item());
  //bc.item().click();
});

$("#selec_all").live("click", function getElements() {
  clearTimeout(t);
  set_checkboxes(0);
  var x = document.getElementsByClassName("mudra_delete");
  var jj = 0;
  for (var j = 0; j < x.length; j++) {
    x[j].setAttribute("checked", "checked");
    jj = jj + 1;
  }
  var aa = document.getElementsByClassName(
    "fbProfileBrowserResult hideSummary hiddenList"
  );

  if (aa.length > 0) {
    var y = document
      .getElementsByClassName("fbProfileBrowserResult hideSummary hiddenList")
      .item()
      .getElementsByClassName("mudra_delete");
    var j2 = 0;
    for (j = 0; j < y.length; j++) {
      y[j].removeAttribute("checked");
      j2 = j2 + 1;
    }
    jj = jj - j2;
  }

  alert("selected " + jj + " friends");
});

$(".uiToolbarContent .rfloat").prepend(
  '<div id="mudra_container" style="float:right;margin-left:5px;"><label class="_11b uiButton uiButtonConfirm" for="mudra"><input type="submit" value="Select All Friends" id="selec_all"></label><label for="mudra" class="_11b uiButton uiButtonConfirm"><input type="submit" id="mass_deleter" value="Delete  Selected Friends"></label>  <div style="display:block">By Naveen</div></div>'
);
$("._69l.rfloat").prepend(
  '<span id="mudra_container" style="float:right;margin-left:5px;"><label class="_11b uiButton uiButtonConfirm" for="mudra"><input type="submit" value="Select All Friends" id="selec_all"></label><label for="mudra" class="_11b uiButton uiButtonConfirm"><input type="submit" id="mass_deleter" value="Delete  Selected Friends"></label>  <span style="display:block">By Mudra</span></span>'
);
$(".stickyHeaderWrap .back").css("height", "60px");
$(".fbTimelineSection.mtm").css("margin-top", "10px");
