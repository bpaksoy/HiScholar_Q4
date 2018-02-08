"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


var numberWithCommas = function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = function (props) {
  var savedUniversities = props.savedUniversities.length ? props.savedUniversities : [];
  //console.log("saved universities in the component", savedUniversities);

  savedUniversities = savedUniversities.map(function (university, index) {
    // console.log("university", university)
    var universityName = Object.keys(university);
    // console.log("universityName", universityName);
    return React.createElement(
      "div",
      { style: style.card, key: index, className: "col-sm-6 col-md-6" },
      React.createElement(
        "div",
        { className: "thumbnail" },
        React.createElement("i", { onClick: props.closeSavedUniversities.bind(undefined), style: { size: "20" }, className: "fa fa-window-close pull-right" }),
        React.createElement("img", { style: style.img, className: "card-img-top", src: university[universityName].imgURL, alt: "university_img" }),
        React.createElement(
          "div",
          { className: "caption" },
          React.createElement(
            "h3",
            null,
            university[universityName].school_name
          ),
          React.createElement(
            "p",
            null,
            university[universityName].description
          ),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Ranked #",
            university[universityName].ranking,
            " among universities in the US."
          ),
          React.createElement("br", null),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Annual tuition $ ",
            numberWithCommas(university[universityName].tuition)
          ),
          React.createElement("br", null),
          React.createElement(
            "small",
            { className: "text-muted" },
            "Acceptance rate: ",
            university[universityName].acceptance_rate,
            "%"
          ),
          React.createElement("br", null)
        )
      )
    );
  });


  return React.createElement(
    "div",
    null,
    savedUniversities.length && !props.clicked ? React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        savedUniversities
      ),
      React.createElement(
        "div",
        { className: "col-md-12" },
        React.createElement(
          "a",
          { href: "#", onClick: props.closeSavedUniversities, className: "btn btn-primary pull-right", role: "button" },
          "Go back"
        )
      )
    ) : React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        { href: "#", onClick: props.closeSavedUniversities, className: "btn btn-primary", role: "button" },
        "See Saved"
      )
    )
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
}

// <div style={style.card} className="row">
//</div>
;