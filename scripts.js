const INTER = 100;

const Types = [
  {
    Pattern: document.URL.includes("gram.com/p/"),
    Condition: `svg[aria-label="Unlike"]`,
    Action: `.fr66n button.wpO6b`,
  },
];

Types.forEach((type) => {
  if (URL.includes(type.Pattern))
    setInterval(function () {
      !document.querySelector(type.Condition)
        ? document.querySelector(type.Action).click()
        : setInterval(function () {
            close();
          }, INTER);
    }, INTER);
});
