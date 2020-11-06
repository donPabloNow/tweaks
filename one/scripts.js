var check = (page) => document.URL.includes(page);

if (check("gram.com/p/"))
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
