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

var SavedUniversities = _interopRequire(require("../presentation/SavedUniversities"));

var SelectedUniversities = _interopRequire(require("../presentation/SelectedUniversities"));

var axios = _interopRequire(require("axios"));

var superagent = _interopRequire(require("superagent"));

var University = (function (Component) {
  function University(props) {
    _classCallCheck(this, University);

    _get(Object.getPrototypeOf(University.prototype), "constructor", this).call(this, props);
    this.state = {
      shouldShowSavedUniversities: true
    };

    this.getSavedUniversities = this.getSavedUniversities.bind(this);
    this.toggleSavedSchools = this.toggleSavedSchools.bind(this);
    this.deleteSchool = this.deleteSchool.bind(this);
  }

  _inherits(University, Component);

  _prototypeProperties(University, null, {
    componentDidMount: {
      value: function componentDidMount() {
        this.getSavedUniversities();
      },
      writable: true,
      configurable: true
    },
    getSavedUniversities: {
      value: function getSavedUniversities() {
        var _this = this;
        axios.get("/api/universities/user/savedschools").then(function (result) {
          _this.props.savedUniversitiesReceived(result.data);
        })["catch"](function (err) {
          console.log("we have not got the data!");
        });
      },
      writable: true,
      configurable: true
    },
    saveSchool: {
      value: function saveSchool(university) {
        this.props.savedUniversitiesReceived([university]);
        axios.put("/api/universities/savedschools", {
          data: university._id
        }).then(function (result) {})["catch"](function (err) {
          console.log("Error occured while saving school " + err);
        });
      },
      writable: true,
      configurable: true
    },
    deleteSchool: {
      value: function deleteSchool(university_id) {
        this.props.removeUniversityFromSaved(university_id);
        axios["delete"]("/api/universities/savedschools/" + university_id).then(function (result) {
          console.log("deleted school is ", result);
        })["catch"](function (err) {
          console.log("Error occured while deleting school " + err);
        });
      },
      writable: true,
      configurable: true
    },
    toggleSavedSchools: {
      value: function toggleSavedSchools() {
        this.setState({
          shouldShowSavedUniversities: !this.state.shouldShowSavedUniversities
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var _state$shouldShowSavedUniversities = this.state.shouldShowSavedUniversities;
        var shouldShowSavedUniversities = _state$shouldShowSavedUniversities === undefined ? false : _state$shouldShowSavedUniversities;
        var _props = this.props;
        var _props$selectedUniversities = _props.selectedUniversities;
        var selectedUniversities = _props$selectedUniversities === undefined ? [] : _props$selectedUniversities;
        var _props$savedUniversities = _props.savedUniversities;
        var savedUniversities = _props$savedUniversities === undefined ? [] : _props$savedUniversities;
        var saved_universities_visible = !!savedUniversities.length && shouldShowSavedUniversities;
        var see_saved_button_text = saved_universities_visible ? "Hide saved" : "See saved";
        return React.createElement(
          "div",
          { className: "universities_section" },
          React.createElement(
            "div",
            null,
            selectedUniversities.length ? React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "h3",
                null,
                " Found ",
                selectedUniversities.length,
                " ",
                selectedUniversities.length == 1 ? "result" : "results",
                "  "
              ),
              React.createElement(
                "div",
                null,
                React.createElement(SelectedUniversities, {
                  removeUniversityFromSelected: this.props.removeUniversityFromSelected,
                  savedUniversities: savedUniversities,
                  saveSchool: this.saveSchool.bind(this),
                  selectedUniversities: selectedUniversities,
                  deleteSchool: this.deleteSchool
                })
              )
            ) : null
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-8" },
                saved_universities_visible ? React.createElement(
                  "h3",
                  null,
                  "Saved Universities"
                ) : null
              ),
              React.createElement(
                "div",
                { className: "col-md-4" },
                !!savedUniversities.length && React.createElement(
                  "button",
                  { href: "#", onClick: this.toggleSavedSchools, className: "btn btn-primary pull-right", role: "button" },
                  see_saved_button_text
                )
              ),
              saved_universities_visible && React.createElement(SavedUniversities, {
                savedUniversities: savedUniversities,
                shouldShowSavedUniversities: shouldShowSavedUniversities,
                getSavedUniversities: this.getSavedUniversities,
                deleteSchool: this.deleteSchool,
                toggleSavedSchools: this.toggleSavedSchools
              })
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return University;
})(Component);

var mapStateToProps = function (state) {
  var _state$university = state.university;
  var university = _state$university === undefined ? {} : _state$university;
  var _university$selectedUniversities = university.selectedUniversities;
  var selectedUniversities = _university$selectedUniversities === undefined ? {} : _university$selectedUniversities;
  var _university$savedUniversities = university.savedUniversities;
  var savedUniversities = _university$savedUniversities === undefined ? {} : _university$savedUniversities;
  var selected_universities_list = Object.values(selectedUniversities);
  var saved_universities_list = Object.values(savedUniversities);

  return {
    selectedUniversities: selected_universities_list,
    savedUniversities: saved_universities_list };
};

var mapDispatchToProps = function (dispatch) {
  return {
    schoolCardClosed: function (index) {
      return dispatch(actions.schoolCardClosed(index));
    },
    savedUniversitiesReceived: function (universities) {
      return dispatch(actions.savedUniversitiesReceived(universities));
    },
    removeUniversityFromSaved: function (universities_id) {
      return dispatch(actions.removeUniversityFromSaved(universities_id));
    },
    removeUniversityFromSelected: function (universities_id) {
      return dispatch(actions.removeUniversityFromSelected(universities_id));
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(University);
// this is an array of universities
//Success