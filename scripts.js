const INTER = 100;

const Types = [
  {
    Pattern: document.URL.includes("gram.com/p/"),
    Condition: `svg[aria-label="Unlike"]`,
    Action: `.fr66n button.wpO6b`,
    Multi: false
  },
  {
    Pattern: document.URL.includes("ViewPostListAgain"),
    Condition: `.ml-sm-5 .row a`,
    Action: `.ml-sm-5 .row a`,
    Multi: true
  },
];

Types.forEach((type) => {
  if (URL.includes(type.Pattern))
    setInterval(function () {
      !document.querySelector(type.Condition.length)
        ? (type.Multi) ? document.querySelectorAll(type.Action)[i].click() : document.querySelector(type.Action).click()
        : setInterval(function () {
            close();
          }, INTER);
    }, INTER);
});
