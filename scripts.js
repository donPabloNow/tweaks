const INTER = 100;

const Types = [
  {
    Pattern: document.URL.includes("gram.com/p/"),
    Condition: `svg[aria-label="Unlike"]`,
    Action: `.fr66n button.wpO6b`,
    Multi: false,
    Action: false,
  },
  {
    Pattern: document.URL.includes("ViewPostListAgain"),
    Condition: `.ml-sm-5 .row a`,
    Action: `.ml-sm-5 .row a`,
    Multi: true,
    Action: true,
  },
];

document.head.appendChild(
  `<script>document.querySelector('one').onclick = () {one.Go(\`+ type +\`)}</script>`
);

var one = {
  Go: function (type) {
    !document.querySelector(type.Condition.length)
      ? type.Multi
        ? document.querySelectorAll(type.Action)[i].click()
        : document.querySelector(type.Action).click()
      : setInterval(function () {
          close();
        }, INTER);
  },
};

Types.forEach((type) => {
  if (URL.includes(type.Pattern))
    setInterval(function () {
      type.Action
        ? one.Go(type)
        : document.body.appendChild(`<one><button><p>go</p></button></one>`);
    }, INTER);
});
