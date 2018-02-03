"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
  var user = props.user; // can be null
  //console.log("user", user)
  // const personal = user.personal;
  // let personalInfo = Object.keys(personal).map((key, index) => { <li>{key}:{personal[key]}</li>})

  return React.createElement(
    "div",
    { className: "card card-profile" },
    React.createElement(
      "div",
      { className: "col-md-12" },
      React.createElement(
        "i",
        { className: "material-icons" },
        "school"
      ),
      React.createElement(
        "h4",
        { style: { textTransform: "capitalize" }, className: "card-title" },
        " Personal"
      )
    ),
    React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "ul",
        null,
        user ? "" : ""
      )
    )
  );
}

// {(personalInfo)? personalInfo : null}
// <div className="col-md-4">
//    <label className="control-label">{user.personal.city}</label><br/>
// </div>
// <div className="col-md-4">
//    <label className="control-label">{user.personal.state}</label><br/>
// </div>
// <div className="col-md-4">
//    <label className="control-label">{user.personal.country}</label><br/>
// </div
// <div className="col-md-4">
//    <label className="control-label">{user.personal.city}</label><br/>
// </div
//  <label className="control-label">GPA</label><br/>
//  <label className="control-label">TOEFL</label><br/>
//  <label className="control-label">SAT</label><br/>
//  <label className="control-label">ACT</label><br/>
;