const WAIT = 500;

<<<<<<< HEAD
function CHECK(page) {
  return document.URL.includes(page);
}

if (CHECK("gram.com/p/")) {
  setInterval(function () {
    !document.querySelector('svg[aria-label="Unlike"]')
      ? document.querySelector(".fr66n button.wpO6b").click()
      : close();
  }, WAIT);
}
=======
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
>>>>>>> parent of ab359d4... update
