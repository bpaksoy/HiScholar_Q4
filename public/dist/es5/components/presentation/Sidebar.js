"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
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
						{ href: "dashboard.html" },
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
						{ href: "/" },
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
};