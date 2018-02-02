"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
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
							"Sign Out"
						)
					)
				)
			)
		)
	);
};