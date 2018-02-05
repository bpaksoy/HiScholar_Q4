"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
  var user = props.user; // can be null
  console.log("user in the personal_statement form", user);
  var personal_statement = user ? user.personal_statement : "";
  // console.log("personal statement in the component", personal_statement)
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      null,
      React.createElement(
        "div",
        { className: "card" },
        React.createElement("img", { style: { boxSize: 200 }, style: { height: 200 }, className: "card-img-top", src: "/img/purple.jpeg", alt: "Purple" }),
        React.createElement(
          "div",
          { style: { padding: 10 }, className: "card-block" },
          React.createElement(
            "h4",
            { style: { textTransform: "capitalize" }, className: "card-title" },
            "Personal Statement"
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            personal_statement
          )
        ),
        React.createElement(
          "button",
          { style: { marginRight: 10 }, className: "btn btn-primary pull-right" },
          "Update Statement"
        )
      )
    )
  );
};