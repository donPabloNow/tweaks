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

var one = {
  Wait = 100,
  Key = 'one',
  Button = `<${one.Key}><button><p>go</p></button></${one.Key}>`,
  Go: function (type) {
    !document.querySelector(type.Condition.length)
      ? type.Multi
        ? document.querySelectorAll(type.Action)[i].click()
        : document.querySelector(type.Action).click()
      : setWaitval(function () {
          close();
        }, one.Wait);
  },
};

Types.forEach((type) => {
  if (URL.includes(type.Pattern))
    setWaitval(function () {
      type.Action
        ? one.Go(type)
        : document.body.appendChild(one.Button),
        (document.querySelector("one").onclick = one.Go(type));
    }, Wait);
});
