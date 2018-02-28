"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Link = require("react-router-dom").Link;
var scrolltoElement = _interopRequire(require("scrollto-element"));

var Twitter = _interopRequire(require("twitter"));

var keys = require("../../../config/keys");

var Nav = (function (Component) {
  function Nav(props) {
    _classCallCheck(this, Nav);

    _get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this, props);
    this.state = {
      searchedUniversity: ""
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  _inherits(Nav, Component);

  _prototypeProperties(Nav, null, {
    handleChange: {
      value: function handleChange(event) {
        if (event) {
          event.preventDefault();
          var _name = event.target.name;
          var value = event.target.value;
          this.setState(_defineProperty({}, _name, value));
        }
      },
      writable: true,
      configurable: true
    },
    handleScroll: {
      value: function handleScroll() {
        console.log("handleScroll");
        scrolltoElement({
          element: document.querySelector(".universities_section"),
          offset: 100, // default is 0
          bezier: [0.19, 1, 0.22, 1], // default is [0.19, 1, 0.22, 1]
          duration: 1000 });
      },
      writable: true,
      configurable: true
    },
    handleSubmit: {
      value: function handleSubmit(event) {
        var _this = this;
        var search = this.refs.search;
        if (event) {
          event.preventDefault();
          var searchedUniversity = this.state.searchedUniversity.trim();
          this.props.searchedUniversityReceived(searchedUniversity);
          search.value = "";
          // console.log("searchedUniversity in the Nav", this.state.searchedUniversity);

          var url = "/api/universities/name/" + searchedUniversity;
          return axios.get(url).then(function (result) {
            var data = result.data;
            _this.props.selectedUniversitiesReceived(data);
            _this.handleScroll();
          })["catch"](function (err) {
            console.log("we have not got the data!");
          });
        }
      },
      writable: true,
      configurable: true
    },
    getTweets: {
      value: function getTweets() {
        console.log("HI MOM");
        var twitter = new Twitter({
          consumer_key: keys.twitter.consumerKey,
          consumer_secret: keys.twitter.consumerSecret,
          access_token: keys.twitter.accessToken,
          access_token_secret: keys.twitter.accessTokenSecret,
          timeout_ms: 5000 });
        // let twitter_handle = 'nyuniversity'
        // let twitter_handle = 'hamiltonhall'
        var twitter_handle = "MeetNYU";

        //gets tweets of specific user by querying Twitter Handle
        twitter.get("statuses/user_timeline", { screen_name: twitter_handle, count: 3 }, function (err, data, response) {
          data.forEach(function (school) {
            // console.log(JSON.stringify(data, null, ' '));
            console.log(school);
          });
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "nav",
          { className: "navbar navbar-transparent navbar-absolute" },
          React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
              "div",
              { className: "navbar-header" },
              React.createElement(
                "button",
                { type: "button", className: "navbar-toggle", "data-toggle": "collapse" },
                React.createElement(
                  "span",
                  { className: "sr-only" },
                  "Toggle navigation"
                ),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" }),
                React.createElement("span", { className: "icon-bar" })
              )
            ),
            React.createElement(
              "div",
              { className: "collapse navbar-collapse" },
              React.createElement(
                "ul",
                { className: "nav navbar-nav navbar-right" },
                React.createElement(
                  "li",
                  { className: "dropdown" },
                  React.createElement(
                    "a",
                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                    React.createElement(
                      "i",
                      { className: "material-icons" },
                      "notifications"
                    ),
                    React.createElement(
                      "span",
                      { className: "notification" },
                      "5"
                    ),
                    React.createElement(
                      "p",
                      { className: "hidden-lg hidden-md" },
                      "Notifications"
                    )
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    Link,
                    { to: "/newsfeed", onClick: this.getTweets.bind(this) },
                    "Newsfeed"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "a",
                    { href: "/auth/logout" },
                    "Log Out"
                  )
                )
              ),
              React.createElement(
                "form",
                { className: "navbar-form navbar-right", role: "search" },
                React.createElement(
                  "div",
                  { className: "form-group  is-empty" },
                  React.createElement("input", { ref: "search", onChange: this.handleChange.bind(this), name: "searchedUniversity", value: this.state.value, type: "text", className: "form-control", placeholder: "Search schools" }),
                  React.createElement("span", { className: "material-input" })
                ),
                React.createElement(
                  "button",
                  { onClick: this.handleSubmit.bind(this), className: "btn btn-white btn-round btn-just-icon" },
                  React.createElement(
                    "i",
                    { className: "material-icons" },
                    "search"
                  ),
                  React.createElement("div", { className: "ripple-container" })
                )
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Nav;
})(Component);

var stateToProps = function (state) {
  return {
    university: state.university
  };
};

var dispatchToProps = function (dispatch) {
  console.log("date is ", new Date().toJSON().slice(0, 10));


  return {
    searchedUniversityReceived: function (university) {
      return dispatch(actions.searchedUniversityReceived(university));
    },
    selectedUniversitiesReceived: function (universities) {
      return dispatch(actions.selectedUniversitiesReceived(universities));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Nav);
// default is 100