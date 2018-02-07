"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Nav = _interopRequire(require("./Nav"));

var axios = _interopRequire(require("axios"));

var superagent = _interopRequire(require("superagent"));

var University = (function (Component) {
  function University(props) {
    _classCallCheck(this, University);

    _get(Object.getPrototypeOf(University.prototype), "constructor", this).call(this, props);
    this.state = {};
  }

  _inherits(University, Component);

  _prototypeProperties(University, null, {
    render: {
      value: function render() {
        var selectedUniversities = this.props.university.selectedUniversities.length ? this.props.university.selectedUniversities : [];
        console.log("selectedUniversities in the University component", selectedUniversities);
        selectedUniversities = selectedUniversities.map(function (university, index) {
          return React.createElement(
            "div",
            { key: index, className: "row" },
            React.createElement(
              "div",
              { className: "col-sm-8 col-md-6" },
              React.createElement(
                "div",
                { className: "thumbnail" },
                React.createElement("img", { src: university.imgURL, alt: "university_img" }),
                React.createElement(
                  "div",
                  { className: "caption" },
                  React.createElement(
                    "h3",
                    null,
                    university.school_name
                  ),
                  React.createElement(
                    "p",
                    null,
                    university.description
                  ),
                  React.createElement(
                    "small",
                    { className: "text-muted" },
                    "Tuition $ ",
                    university.tuition
                  ),
                  React.createElement("br", null),
                  React.createElement(
                    "small",
                    { className: "text-muted" },
                    "Acceptance rate: ",
                    university.acceptance_rate,
                    "%"
                  ),
                  React.createElement(
                    "p",
                    null,
                    React.createElement(
                      "a",
                      { href: "#", className: "btn btn-primary", role: "button" },
                      "Save"
                    )
                  )
                )
              )
            )
          );
        });

        return React.createElement(
          "div",
          null,
          selectedUniversities.length ? React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              null,
              "This is University component!"
            ),
            selectedUniversities
          ) : null
        );
      },
      writable: true,
      configurable: true
    }
  });

  return University;
})(Component);

var stateToProps = function (state) {
  return {
    university: state.university
  };
};

var dispatchToProps = function (dispatch) {
  return {};
};

module.exports = connect(stateToProps, dispatchToProps)(University);


var divStyle = {
  padding: "5px 5px 5px 5px",
  margin: "10px 10px 10px 10px"
};



// <div style={divStyle} key={index} className="card" style={{width: "25rem", margin: "10"}}>
//    <img className="card-img-top" src={university.imgURL} alt="Card image cap"/>
//    <div  className="card-block">
//      <span><a href="#"><b>{university.school_name}</b></a></span>
//      <p className="card-text">{university.description}</p>
//      <small className="text-muted">Tuition $ {university.tuition}</small><br/>
//      <small className="text-muted">Acceptance rate: {university.acceptance_rate}%</small>
//    </div>
// </div>
// <div className="card" style={{width: "30rem"}}>
//   <img className="card-img-top" src="/img/Logo.png" alt="Card image cap"/>
//   <div className="card-block" style={{marginLeft: "10"}}>
//     <h4 className="card-title">Card title</h4>
//     <p className="card-text" >Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//   </div>
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">Cras justo odio</li>
//     <li className="list-group-item">Dapibus ac facilisis in</li>
//     <li className="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div className="card-block">
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>
// </div>

// <div className="card" style={{width: "25rem", margin: "10"}}>
//    <img className="card-img-top" src="" alt="Card image cap"/>
//    <div className="card-block">
//      <p style={pStyle} className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//    </div>
//  </div>
// </div>