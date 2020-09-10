"use strict";

var appRoot = document.getElementById('app');
var detailsText = "Incidunt ut architecto nisi harum inventore itaque facere ut. Harum atque recusandae a architecto sit dolores sint doloribus molestias. Qui ducimus facilis. Aliquam fugiat laborum sunt rerum voluptatem consectetur quia molestias. Neque est ipsa qui qui ipsa sint.";
var areDetailsShown = false;

function toggleDetails() {
  areDetailsShown = !areDetailsShown;
  renderApp();
}

function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility Toggle"), /*#__PURE__*/React.createElement("button", {
    onClick: toggleDetails
  }, "".concat(areDetailsShown ? "Hide" : "Show", " Details")), /*#__PURE__*/React.createElement("p", null, areDetailsShown ? detailsText : ""));
  ReactDOM.render(template, appRoot);
}

renderApp();
