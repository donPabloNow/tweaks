let base = {
  Script: "/script.js",
  Style: "/style.css",
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
};

let go = {
  URL: "https://tweaks.obeyi.com/",
  _libs: [],
  loadMultipleExternalResources: function (itemsToLoad, perm) {
    var promises = itemsToLoad.map(function (url) {
      if (url) return base.loadExternalResource(url, perm);
    });
    return Promise.all(promises);
  },
  check: function (condition) {
    return document.URL.includes(condition);
  },
  OPTIONS: [
    {
      PATH: "auto.like",
      TYPE: base.Script,
      CON: `gram.com/p/`,
    },
    {
      PATH: "dark.theme",
      TYPE: base.Style,
      CON: `*`,
    },
  ],
};

//prep
go.OPTIONS.forEach((option) => {
  go.check(option.CON) ?? go._libs.push(go.URL + option.PATH + option.TYPE);
});

//go
go.loadMultipleExternalResources(true).then(function () {
  // shake-a-leg
});
