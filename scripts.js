const _WAIT = 100;
const _KEY = "one";
const _DOC = document;

const Types = [
  {
    Pattern: `gram.com/p/`,
    Condition: `svg[aria-label="Unlike"]`,
    Action: `.fr66n button.wpO6b`,
    Multi: false,
    Action: false,
  },
  {
    Pattern: `ViewPostListAgain`,
    Condition: `.ml-sm-5 .row a`,
    Action: `.ml-sm-5 .row a`,
    Multi: true,
    Action: true,
  },
];

var one = {
  Go: function (type) {
    !_DOC.querySelector(type.Condition).length
      ? type.Multi
        ? _DOC.querySelectorAll(type.Action)[i].click()
        : _DOC.querySelector(type.Action).click()
      : setInterval(function () {
          close();
        }, _WAIT);
  },
};

Types.forEach((type) => {
  if (_DOC.URL.includes(type.Pattern))
    setInterval(function () {
      type.Action
        ? one.Go(type)
        : _DOC.appendChild(
            `<${_KEY}><button javascript="one.Go(\`${type}\`)"><p>go</p></button></${_KEY}>`
          ),
        (_DOC.querySelector("one").onclick = one.Go(type));
    }, _WAIT);
});
