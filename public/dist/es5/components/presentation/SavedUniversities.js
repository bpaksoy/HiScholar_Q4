"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


var numberWithCommas = function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = function (props) {
  var _props$shouldShowSavedUniversities = props.shouldShowSavedUniversities;
  var shouldShowSavedUniversities = _props$shouldShowSavedUniversities === undefined ? false : _props$shouldShowSavedUniversities;
  var _props$savedUniversities = props.savedUniversities;
  var savedUniversities = _props$savedUniversities === undefined ? [] : _props$savedUniversities;


  var saved_universities_markup = savedUniversities.map(function (university, index) {
    var _university$school_name = university.school_name;
    var school_name = _university$school_name === undefined ? "" : _university$school_name;
    var _university$description = university.description;
    var description = _university$description === undefined ? "" : _university$description;
    var _university$ranking = university.ranking;
    var ranking = _university$ranking === undefined ? "" : _university$ranking;
    var _university$tuition = university.tuition;
    var tuition = _university$tuition === undefined ? "" : _university$tuition;
    var _university$acceptance_rate = university.acceptance_rate;
    var acceptance_rate = _university$acceptance_rate === undefined ? "" : _university$acceptance_rate;
    var _university$_id = university._id;
    var _id = _university$_id === undefined ? "" : _university$_id;
    var _university$imgURL = university.imgURL;
    var imgURL = _university$imgURL === undefined ? "" : _university$imgURL;


    return React.createElement(
      "div",
      { key: _id, className: "col-md-6", style: style.card },
      React.createElement("i", { onClick: props.deleteSchool.bind(undefined, _id), style: { size: "20" }, style: style.closeButton, className: "fa fa-window-close pull-right" }),
      React.createElement(
        "div",
        { className: "thumbnail" },
        React.createElement("img", { style: style.img, className: "card-img-top", src: imgURL, alt: "university_img" }),
        React.createElement(
          "div",
          { className: "caption" },
          React.createElement(
            "h3",
            null,
            school_name
          ),
          React.createElement(
            "p",
            null,
            description
          ),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Ranked #",
            ranking,
            " among universities in the US."
          ),
          React.createElement("br", null),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Annual tuition $ ",
            numberWithCommas(tuition)
          ),
          React.createElement("br", null),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Acceptance rate: ",
            acceptance_rate,
            "%"
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "button",
              { onClick: props.deleteSchool.bind(undefined, _id), className: "btn btn-primary", role: "button" },
              " Saved ",
              React.createElement("i", { className: "fa fa-heart" })
            )
          )
        )
      )
    );
  });

  saved_universities_markup = savedUniversities.length ? saved_universities_markup : "No Saved Univesities.";

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { style: style.card },
        saved_universities_markup
      )
    )
  );
};

var style = {
  card: {
    minHeight: "550px" },
  img: {
    WebkitBoxFlex: "0",
    WebkitFlex: "0 0 auto",
    msFlex: "0 0 auto",
    flex: "0 0 auto"
  },
  closeButton: {
    position: "absolute",
    top: "-3px",
    right: "11px"
  }
}

// <div style={style.card} className="row">
//</div>
;