"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Nav = (function (Component) {
	function Nav() {
		_classCallCheck(this, Nav);

		_get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this);
	}

	_inherits(Nav, Component);

	_prototypeProperties(Nav, null, {
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
							),
							React.createElement(
								"a",
								{ className: "navbar-brand", href: "#" },
								" Dashboard "
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
										"a",
										{ href: "#" },
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
									React.createElement("input", { type: "text", className: "form-control", placeholder: "Search schools" }),
									React.createElement("span", { className: "material-input" })
								),
								React.createElement(
									"button",
									{ type: "submit", className: "btn btn-white btn-round btn-just-icon" },
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

module.exports = Nav;