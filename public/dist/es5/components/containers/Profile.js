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

var _presentation = require("../presentation");

var ProfileForm = _presentation.ProfileForm;
var ProfileCard = _presentation.ProfileCard;
var axios = _interopRequire(require("axios"));

var superagent = _interopRequire(require("superagent"));

var Profile = (function (Component) {
	function Profile() {
		_classCallCheck(this, Profile);

		_get(Object.getPrototypeOf(Profile.prototype), "constructor", this).call(this);
		this.state = {
			user: {},
			firstName: "",
			lastName: "",
			personal: {
				city: "",
				state: "",
				country: "",
				zip_code: "",
				gpa: "",
				toefl: "",
				act: "",
				sat: "",
				personal_statement: ""
			}
		};
	}

	_inherits(Profile, Component);

	_prototypeProperties(Profile, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;
				superagent.get("/auth/currentuser").query(null).set("Accept", "application/json").end(function (err, response) {
					if (err) return;
					var payload = response.body;
					var user = payload.user; // this is the currently logged-in user
					_this.props.currentUserReceived(user);
				});
			},
			writable: true,
			configurable: true
		},
		handleChange: {
			value: function handleChange(propertyName, event) {
				if (event) {
					event.preventDefault();
					var _name = event.target.name;
					var value = event.target.value ? event.target.value : "";
					var personal = Object.assign({}, this.state.personal);
					personal[propertyName] = value;
					var user = this.props.user.currentUser;
					this.setState(_defineProperty({
						personal: personal }, propertyName, value));
				}
			},
			writable: true,
			configurable: true
		},
		updateUser: {
			value: function updateUser(event) {
				if (event) {
					event.preventDefault();
					var personal = this.state.personal;
					this.props.personalInfoReceived(personal);
					console.log("firstName: ", this.state.firstName, "lastName: ", this.state.lastName);
					axios.put("/auth/currentuser", { personal: personal }).then(function (result) {
						console.log("result is ", result);
					})["catch"](function (err) {
						console.log("we have not got the data!");
					});
				}
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var currentUser = this.props.user.currentUser; // can be null
				var personal = this.state.personal;
				//console.log("currentUser in the profile", currentUser)

				return React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-8" },
						currentUser ? React.createElement(ProfileForm, { handleChange: this.handleChange.bind(this), onUpdate: this.updateUser.bind(this), user: currentUser, personal: personal }) : null
					),
					React.createElement(
						"div",
						{ className: "col-md-4" },
						currentUser ? React.createElement(ProfileCard, { user: currentUser }) : null
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Profile;
})(Component);

var stateToProps = function (state) {
	return {
		user: state.user,
		information: state.information
	};
};

var dispatchToProps = function (dispatch) {
	return {
		currentUserReceived: function (user) {
			return dispatch(actions.currentUserReceived(user));
		},
		personalInfoReceived: function (information) {
			return dispatch(actions.personalInfoReceived(information));
		}
	};
};

module.exports = connect(stateToProps, dispatchToProps)(Profile);