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
      isSaved: false,
      clicked: false,
      buttonChange: false };
  }

  _inherits(University, Component);

  _prototypeProperties(University, null, {
    componentDidMount: {
      value: function componentDidMount() {
        var _this = this;
        axios.get("/api/universities/user/savedschools").then(function (result) {
          //console.log("saved schools are ", result);
          _this.props.savedUniversitiesReceived(result.data);
        })["catch"](function (err) {
          console.log("we have not got the data!");
        });
        this.setState({
          isSaved: false
        });
      },
      writable: true,
      configurable: true
    },
    getSavedUniversities: {
      value: function getSavedUniversities(event) {
        var _this = this;
        if (event) {
          axios.get("/api/universities/user/savedschools").then(function (result) {
            //console.log("saved schools are ", result);
            _this.props.savedUniversitiesReceived(result.data);
          })["catch"](function (err) {
            console.log("we have not got the data!");
          });
          this.setState({
            isSaved: !this.state.isSaved,
            clicked: !this.state.clicked
          });
        }
      },
      writable: true,
      configurable: true
    },
    saveSchool: {
      value: function saveSchool(university, index, event) {
        if (event) {
          event.preventDefault();
          var universityName = undefined;
          for (var key in university) {
            universityName = key;
          }

          console.log("university", university, "universityName", universityName);
          university = university[universityName];
          axios.put("/api/universities/savedschools", _defineProperty({}, universityName, university)).then(function (result) {
            console.log("saved school is ", result);
            //const savedSchool = result.data.savedSchools[result.data.savedSchools.length - 1];
            this.props.savedUniversitiesReceived(university);
          })["catch"](function (err) {
            console.log("we have not got the data!");
          });
          this.setState({
            isSaved: !this.state.isSaved,
            buttonChange: !this.state.buttonChange
          });
        }
      },
      writable: true,
      configurable: true
    },
    deleteSchool: {
      value: function deleteSchool(university, index, event) {
        if (event) {
          event.preventDefault();
          var universityName = university.school_name;
          axios["delete"]("/api/universities/savedschools", _defineProperty({}, universityName, university)).then(function (result) {
            console.log("saved school is ", result);
          })["catch"](function (err) {
            console.log("we have not got the data!");
          });
          this.setState({
            isSaved: !this.state.isSaved
          });
        }
      },
      writable: true,
      configurable: true
    },
    closeSchoolCard: {
      value: function closeSchoolCard(index, event) {
        if (event) {
          event.preventDefault();
          // console.log("index", index)
          this.props.schoolCardClosed(index);
        }
      },
      writable: true,
      configurable: true
    },
    closeSavedUniversities: {
      value: function closeSavedUniversities(event) {
        if (event) {
          event.preventDefault();
          this.setState({
            clicked: !this.state.clicked
          });
        }
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var selectedUniversities = this.props.university.selectedUniversities.length ? this.props.university.selectedUniversities : [];
        //console.log("selectedUniversities in the University component", selectedUniversities)
        var savedUniversities = this.props.university.savedUniversities.length ? this.props.university.savedUniversities : [];
        console.log("saved universities in the university component", savedUniversities);

        var isSaved = this.state.isSaved;
        console.log("isSaved: ", isSaved);
        var clicked = this.state.clicked;
        console.log("clicked", clicked);
        var buttonChange = this.state.buttonChange;

        return React.createElement(
          "div",
          null,
          React.createElement(
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
              React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement(SelectedUniversities, { isSaved: isSaved, buttonChange: buttonChange, savedUniversities: savedUniversities, closeSchoolCard: this.closeSchoolCard.bind(this), saveSchool: this.saveSchool.bind(this), deleteSchool: this.deleteSchool.bind(this), selectedUniversities: selectedUniversities })
              )
            ) : null
          ),
          React.createElement(
            "div",
            null,
            !savedUniversities.length ? null : React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "col-md-6" },
                React.createElement(SavedUniversities, { getSavedUniversities: this.getSavedUniversities.bind(this), clicked: clicked, closeSavedUniversities: this.closeSavedUniversities.bind(this), savedUniversities: savedUniversities })
              )
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

var stateToProps = function (state) {
  return {
    university: state.university
  };
};

var dispatchToProps = function (dispatch) {
  return {
    schoolCardClosed: function (index) {
      return dispatch(actions.schoolCardClosed(index));
    },
    savedUniversitiesReceived: function (universities) {
      return dispatch(actions.savedUniversitiesReceived(universities));
    },
    saveReceived: function (saveState) {
      return dispatch(actions.saveReceived(saveState));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(University);
// this is an array of universities
// this is an array of universities