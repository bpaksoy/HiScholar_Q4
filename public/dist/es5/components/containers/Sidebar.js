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

var Sidebar = (function (Component) {
	function Sidebar(props) {
		_classCallCheck(this, Sidebar);

		_get(Object.getPrototypeOf(Sidebar.prototype), "constructor", this).call(this, props);
		this.state = {};
	}

	_inherits(Sidebar, Component);

	_prototypeProperties(Sidebar, null, {
		getSavedUniversities: {
			value: function getSavedUniversities(event) {
				var _this = this;
				if (event) {
					event.preventDefault();
					axios.get("/api/universities/user/savedschools").then(function (result) {
						console.log("saved schools are ", result);
						_this.props.savedUniversitiesReceived(result.data);
					})["catch"](function (err) {
						console.log("we have not got the data!");
					});
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
				//console.log("isClicked", this.state.clicked)
				return React.createElement(
					"div",
					{ className: "sidebar", "data-color": "purple", "data-image": "/img/sidebar-1.jpg" },
					React.createElement(
						"div",
						{ className: "logo" },
						React.createElement("img", { className: "img", src: "/img/Logo.png" })
					),
					React.createElement(
						"div",
						{ className: "sidebar-wrapper" },
						React.createElement(
							"ul",
							{ className: "nav" },
							React.createElement(
								"li",
								{ className: "active" },
								React.createElement(
									"a",
									{ href: "/" },
									React.createElement(
										"i",
										{ className: "material-icons" },
										"dashboard"
									),
									React.createElement(
										"p",
										null,
										"Dashboard"
									)
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "./user.html" },
									React.createElement(
										"i",
										{ className: "material-icons" },
										"person"
									),
									React.createElement(
										"p",
										null,
										"Browse"
									)
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ onClick: this.getSavedUniversities.bind(this), href: "/" },
									React.createElement(
										"i",
										{ className: "material-icons" },
										"content_paste"
									),
									React.createElement(
										"p",
										null,
										"Saved Schools"
									)
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "./typography.html" },
									React.createElement(
										"i",
										{ className: "material-icons" },
										"info_outline"
									),
									React.createElement(
										"p",
										null,
										"Need help?"
									)
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "./icons.html" },
									React.createElement(
										"i",
										{ className: "material-icons" },
										"bubble_chart"
									),
									React.createElement(
										"p",
										null,
										"Meet with Recruiters"
									)
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "./maps.html" },
									React.createElement(
										"i",
										{ className: "material-icons" },
										"location_on"
									),
									React.createElement(
										"p",
										null,
										"Maps"
									)
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "./notifications.html" },
									React.createElement(
										"i",
										{ className: "material-icons text-gray" },
										"notifications"
									),
									React.createElement(
										"p",
										null,
										"Notifications"
									)
								)
							),
							React.createElement(
								"li",
								{ className: "active-pro" },
								React.createElement(
									"a",
									{ href: "upgrade.html" },
									React.createElement(
										"i",
										{ className: "material-icons" },
										"unarchive"
									),
									React.createElement(
										"p",
										null,
										"Upgrade to PRO"
									)
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

	return Sidebar;
})(Component);

var stateToProps = function (state) {
	return {
		university: state.university
	};
};

var dispatchToProps = function (dispatch) {
	return {
		savedUniversitiesReceived: function (universities) {
			return dispatch(actions.savedUniversitiesReceived(universities));
		}
	};
};

module.exports = connect(stateToProps, dispatchToProps)(Sidebar);
// this is an array of universities