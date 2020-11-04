var one = {
  Types: {
    Script: "/script.js",
    Style: "/style.css"
  },
  URL: "https://raw.githubusercontent.com/donPabloNow/tweaks/main/one/",
  _libs: [],
  loadExternalResource: function (url, perm) {
    if (!url) return;

    return new Promise(function (resolve, reject) {
      var match = url.match(/\.([^.]+)$/);
      if (match) type = match[1];

      var tag;

      if (type) {
        if (type === "css") {
          tag = document.createElement("link");
          tag.type = "text/css";
          tag.rel = "stylesheet";
          tag.href = url;
        } else if (type === "js") {
          tag = document.createElement("script");
          tag.type = "text/javascript";
          tag.src = url;
        }

        if (tag) {
          tag.onload = function () {
            resolve(url);
          };
          tag.onerror = function () {
            reject(url);
          };

          if (!perm) {
            tag.classList.add("oneStyles");
            document.getElementById("mean-content").appendChild(tag);
          } else {
            document.head.appendChild(tag);
          }
        }
      }
    });
  },
  loadMultipleExternalResources: function (itemsToLoad, perm) {
    var promises = itemsToLoad.map(function (url) {
      if (url) return one.loadExternalResource(url, perm);
    });
    return Promise.all(promises);
  },
  check: function(condition){
    return document.URL.includes(condition)
  },
  OPTIONS: {
    AutoLike: {
      PATH: 'auto.like',
      TYPE: one.Types.Script,
      CON: `https://www.instagram.com/p/`
    },
    DarkTheme: {
      PATH: 'auto.like',
      TYPE: one.Types.Style,
      CON: `*`
    }
  },
};

OPTIONS.forEach(option => {
  (check(option.CON)) ?? one._libs.push(one.URL + option.PATH + option.TYPE)
});

one.loadMultipleExternalResources(one._libs, true).then(function () {
  one.getoneUuid(one.init);
  one.loader();
});