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
var InfoCard = _presentation.InfoCard;
var PersonalStatement = _presentation.PersonalStatement;
var StatementCard = _presentation.StatementCard;
var axios = _interopRequire(require("axios"));

var superagent = _interopRequire(require("superagent"));

function validate(city, country) {
	return {
		city: city.length === 0,
		country: country.length === 0 };
}

function validateStatement(statement) {
	return statement.length === 0;
}

var Profile = (function (Component) {
	function Profile() {
		_classCallCheck(this, Profile);

		_get(Object.getPrototypeOf(Profile.prototype), "constructor", this).call(this);
		this.state = {
			user: {},
			firstName: "",
			lastName: "",
			personal: {},
			value: "",
			city: "",
			country: "",
			personal_statement: "",
			infoChanged: true,
			statementSubmitted: true
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
		handleStatement: {
			value: function handleStatement(event) {
				if (event) {
					event.preventDefault();
					var _name = event.target.name;
					var value = event.target.value ? event.target.value : "";
					this.setState(_defineProperty({}, _name, value));
				}
			},
			writable: true,
			configurable: true
		},
		updateInformation: {
			value: function updateInformation(event) {
				if (event) {
					event.preventDefault();
					this.setState({
						infoChanged: !this.state.infoChanged
					});
				}
			},
			writable: true,
			configurable: true
		},
		updateStatement: {
			value: function updateStatement(event) {
				if (event) {
					event.preventDefault();
					this.setState({
						statementSubmitted: !this.state.statementSubmitted
					});
				}
			},
			writable: true,
			configurable: true
		},
		submitStatement: {
			value: function submitStatement(event) {
				if (event) {
					event.preventDefault();
					var personal_statement = this.state.personal_statement;
					this.setState({
						statementSubmitted: !this.state.statementSubmitted
					});
					//console.log("personal statement in the submit method", personal_statement);
					this.props.personalStatementReceived(personal_statement);
					axios.put("/auth/personal_statement", { personal_statement: personal_statement }).then(function (result) {
						console.log("result is ", result);
					})["catch"](function (err) {
						console.log("we have not got the data!");
					});
				}
			},
			writable: true,
			configurable: true
		},
		handleChange: {
			value: function handleChange(event) {
				if (event) {
					event.preventDefault();
					var _name = event.target.name;
					var value = event.target.value ? event.target.value : "";
					var personal = Object.assign({}, this.state.personal);
					personal[_name] = value;
					// let user = this.props.user.currentUser;
					this.setState({
						personal: personal });
					console.log("this.state", this.state);
				}
			},
			writable: true,
			configurable: true
		},
		handleCity: {
			value: function handleCity(event) {
				if (event) {
					event.preventDefault();
					this.setState({
						city: event.target.value
					});
				}
			},
			writable: true,
			configurable: true
		},
		handleCountry: {
			value: function handleCountry(event) {
				if (event) {
					event.preventDefault();
					this.setState({
						country: event.target.value
					});
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
					this.setState({
						infoChanged: !this.state.infoChanged
					});
					//console.log("firstName: ", this.state.firstName, "lastName: ", this.state.lastName);
					axios.put("/auth/currentuser", { personal: personal }).then(function (result) {})["catch"](function (err) {
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
				var personal = currentUser ? currentUser.personal : "";
				//console.log("personal", personal)
				var personal_statement = currentUser ? currentUser.personal_statement : null;
				console.log("personal_statement in the profile", personal_statement);

				var errors = validate(this.state.city, this.state.country);
				var isDisabled = Object.keys(errors).some(function (key) {
					return errors[key];
				});
				//console.log(errors, isDisabled);
				var noStatement = validateStatement(this.state.personal_statement);
				//console.log("no statement status: ", noStatement)
				var infoChanged = this.state.infoChanged;
				var statementSubmitted = this.state.statementSubmitted;
				console.log("infoChanged", infoChanged, "statementSubmitted", statementSubmitted);

				if (currentUser && !personal.length && !personal_statement) {
					return React.createElement(
						"div",
						null,
						React.createElement(
							"div",
							{ className: "col-md-8" },
							React.createElement(ProfileForm, { handleChange: this.handleChange.bind(this), onUpdate: this.updateUser.bind(this), user: currentUser, personal: personal, isDisabled: isDisabled, handleCity: this.handleCity.bind(this), handleCountry: this.handleCountry.bind(this) }),
							React.createElement(PersonalStatement, { submitStatement: this.submitStatement.bind(this), handleStatement: this.handleStatement.bind(this), user: currentUser, personal_statement: this.state.personal_statement, noStatement: noStatement })
						),
						React.createElement(
							"div",
							{ className: "col-md-4" },
							React.createElement(ProfileCard, { user: currentUser })
						)
					);
				} else if (currentUser && personal.length && !personal_statement) {
					if (infoChanged) {
						return React.createElement(
							"div",
							null,
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(PersonalStatement, { submitStatement: this.submitStatement.bind(this), handleStatement: this.handleStatement.bind(this), user: currentUser, personal_statement: this.state.personal_statement, noStatement: noStatement })
							),
							React.createElement(
								"div",
								{ className: "col-md-4" },
								React.createElement(ProfileCard, { user: currentUser }),
								React.createElement(InfoCard, { user: currentUser, personal: personal, updateInformation: this.updateInformation.bind(this) })
							)
						);
					} else {
						return React.createElement(
							"div",
							null,
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(PersonalStatement, { submitStatement: this.submitStatement.bind(this), handleStatement: this.handleStatement.bind(this), user: currentUser, personal_statement: this.state.personal_statement, noStatement: noStatement })
							),
							React.createElement(
								"div",
								{ className: "col-md-4" },
								React.createElement(ProfileCard, { user: currentUser }),
								React.createElement(ProfileForm, { handleChange: this.handleChange.bind(this), onUpdate: this.updateUser.bind(this), user: currentUser, personal: personal, isDisabled: isDisabled, handleCity: this.handleCity.bind(this), handleCountry: this.handleCountry.bind(this) })
							)
						);
					}
				} else if (currentUser && !personal.length && personal_statement) {
					if (statementSubmitted) {
						return React.createElement(
							"div",
							null,
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(ProfileForm, { handleChange: this.handleChange.bind(this), onUpdate: this.updateUser.bind(this), user: currentUser, personal: personal, isDisabled: isDisabled, handleCity: this.handleCity.bind(this), handleCountry: this.handleCountry.bind(this) }),
								React.createElement(StatementCard, { user: currentUser, personal_statement: personal_statement, updateStatement: this.updateStatement.bind(this) })
							),
							React.createElement(
								"div",
								{ className: "col-md-4" },
								React.createElement(ProfileCard, { user: currentUser })
							)
						);
					} else if (!statementSubmitted) {
						return React.createElement(
							"div",
							null,
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(ProfileForm, { handleChange: this.handleChange.bind(this), onUpdate: this.updateUser.bind(this), user: currentUser, personal: personal, isDisabled: isDisabled, handleCity: this.handleCity.bind(this), handleCountry: this.handleCountry.bind(this) }),
								React.createElement(PersonalStatement, { submitStatement: this.submitStatement.bind(this), handleStatement: this.handleStatement.bind(this), user: currentUser, personal_statement: this.state.personal_statement, noStatement: noStatement })
							),
							React.createElement(
								"div",
								{ className: "col-md-4" },
								React.createElement(ProfileCard, { user: currentUser })
							)
						);
					}
				} else {
					if (infoChanged && statementSubmitted) {
						return React.createElement(
							"div",
							null,
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(StatementCard, { user: currentUser, personal_statement: personal_statement, updateStatement: this.updateStatement.bind(this) })
							),
							React.createElement(
								"div",
								{ className: "col-md-4" },
								React.createElement(ProfileCard, { user: currentUser }),
								React.createElement(InfoCard, { user: currentUser, personal: personal, updateInformation: this.updateInformation.bind(this) })
							)
						);
					} else if (!infoChanged && statementSubmitted) {
						return React.createElement(
							"div",
							null,
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(ProfileForm, { handleChange: this.handleChange.bind(this), onUpdate: this.updateUser.bind(this), user: currentUser, personal: personal, isDisabled: isDisabled, handleCity: this.handleCity.bind(this), handleCountry: this.handleCountry.bind(this) }),
								React.createElement(StatementCard, { user: currentUser, personal_statement: personal_statement, updateStatement: this.updateStatement.bind(this) })
							),
							React.createElement(
								"div",
								{ className: "col-md-4" },
								React.createElement(ProfileCard, { user: currentUser })
							)
						);
					} else if (infoChanged && !statementSubmitted) {
						return React.createElement(
							"div",
							null,
							React.createElement(
								"div",
								{ className: "col-md-8" },
								React.createElement(PersonalStatement, { submitStatement: this.submitStatement.bind(this), handleStatement: this.handleStatement.bind(this), user: currentUser, personal_statement: this.state.personal_statement, noStatement: noStatement })
							),
							React.createElement(
								"div",
								{ className: "col-md-4" },
								React.createElement(ProfileCard, { user: currentUser }),
								React.createElement(InfoCard, { user: currentUser, personal: personal, updateInformation: this.updateInformation.bind(this) })
							)
						);
					}
				}
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
		information: state.information,
		statement: state.statement
	};
};

var dispatchToProps = function (dispatch) {
	return {
		currentUserReceived: function (user) {
			return dispatch(actions.currentUserReceived(user));
		},
		personalInfoReceived: function (information) {
			return dispatch(actions.personalInfoReceived(information));
		},
		personalStatementReceived: function (statement) {
			return dispatch(actions.personalStatementReceived(statement));
		}
	};
};

module.exports = connect(stateToProps, dispatchToProps)(Profile);
//console.log("this is handle personal statement", this.state.personal_statement)
//console.log("result is ", result);