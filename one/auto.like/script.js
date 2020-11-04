function like() {
  !document.querySelector('svg[aria-label="Unlike"]')
    ? document.querySelector(".fr66n button.wpO6b").click()
    : setTimeout(function () {
        close();
      }, 5000);
}

setInterval(function () {
  like();
}, 500);