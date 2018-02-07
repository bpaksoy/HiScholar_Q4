"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Nav = require("./Nav").Nav;
var axios = _interopRequire(require("axios"));

var superagent = _interopRequire(require("superagent"));

var University = (function (Component) {
  function University() {
    _classCallCheck(this, University);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(University, Component);

  _prototypeProperties(University, null, {
    componentDidMount: {
      value: function componentDidMount() {
        superagent.get("/api/universities").query(null).set("Accept", "application/json").end(function (err, response) {
          if (err) return;
          var payload = response.body;
          console.log("university array", payload);
        });
      },
      writable: true,
      configurable: true
    },
    handleChange: {
      value: function handleChange(event) {
        if (event) {
          event.preventDefault();
        }
      },
      writable: true,
      configurable: true
    },
    handleSubmit: {
      value: function handleSubmit(event) {
        if (event) {
          event.preventDefault();
        }
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "h3",
            null,
            "This is University component!"
          ),
          React.createElement(Nav, null)
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
    user: state.user
  };
};

var dispatchToProps = function (dispatch) {
  return {};
};

module.exports = connect(stateToProps, dispatchToProps)(University);