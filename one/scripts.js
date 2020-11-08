const WAIT = 500;

function CHECK(page) {
  return document.URL.includes(page);
}

if (CHECK("gram.com/p/")) {
  setInterval(function () {
    if (document.querySelector('svg[aria-label="Unlike"]')) {
      document.querySelector(".fr66n button.wpO6b").click();
    } else {
      close();
    }
  }, WAIT);
}
