
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