"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


var numberWithCommas = function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = function (props) {
  var selectedUniversities = props.selectedUniversities.length ? props.selectedUniversities : [];
  //console.log("saved universities in the component", savedUniversities);
  var savedUniversities = props.savedUniversities.length ? props.savedUniversities : [];
  console.log("saved Unis", savedUniversities);

  var isSaved = props.isSaved;
  var buttonChange = props.buttonChange;

  var lastSearched = selectedUniversities.length ? selectedUniversities[selectedUniversities.length - 1] : "";
  //console.log("selectedUniversity", selectedUniversity);

  var universityName = undefined;
  for (var key in lastSearched) {
    universityName = key;
  }

  console.log("universityName", universityName);

  var compare = savedUniversities.length ? savedUniversities.filter(function (university) {
    return [].concat(_toConsumableArray(university), [university[universityName]]);
  }) : [];

  console.log("compare", compare);

  var selectedUniversity = selectedUniversities.map(function (university, index, array) {
    var schoolName = undefined;
    for (var key in university) {
      schoolName = key;
    }
    var selected = university[schoolName];
    console.log("selected", selected, schoolName);
    var button = compare.length ? compare.filter(function (university) {
      //console.log("university[schoolName]", university[schoolName], schoolName)
      return university[schoolName];
    }) : [];

    console.log("button", button);
    return React.createElement(
      "div",
      { key: index },
      React.createElement("i", { onClick: props.closeSchoolCard.bind(undefined, index), style: { size: "20" }, className: "fa fa-window-close pull-right" }),
      React.createElement(
        "div",
        { className: "thumbnail" },
        React.createElement("img", { style: style.img, className: "card-img-top", src: selected.imgURL, alt: "university_img" }),
        React.createElement(
          "div",
          { className: "caption" },
          React.createElement(
            "h3",
            null,
            selected.school_name
          ),
          React.createElement(
            "p",
            null,
            selected.description
          ),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Ranked #",
            selected.ranking,
            " among universities in the US."
          ),
          React.createElement("br", null),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Annual tuition $ ",
            numberWithCommas(selected.tuition)
          ),
          React.createElement("br", null),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Acceptance rate: ",
            selected.acceptance_rate,
            "%"
          ),
          React.createElement(
            "p",
            null,
            button.length || buttonChange ? React.createElement(
              "a",
              { href: "/", onClick: props.deleteSchool.bind(undefined, university, index), className: "btn btn-primary", role: "button" },
              "Saved ",
              React.createElement("i", { className: "fa fa-heart" })
            ) : React.createElement(
              "a",
              { href: "/", onClick: props.saveSchool.bind(undefined, university, index), className: "btn btn-primary", role: "button" },
              "Save"
            )
          )
        )
      )
    );
  });



  return React.createElement(
    "div",
    { style: style.card },
    selectedUniversity
  );
};

var style = {
  card: {
    display: "-webkit-box",
    display: "-webkit-flex",
    display: "ms-flexbox",
    display: "flex",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    WebkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    width: "100%"
  },
  img: {
    WebkitBoxFlex: "0",
    WebkitFlex: "0 0 auto",
    msFlex: "0 0 auto",
    flex: "0 0 auto"
  }
};