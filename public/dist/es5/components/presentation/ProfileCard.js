"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
	var user = props.user; // can be null
	var fullName = user == null ? "" : user.firstName + " " + user.lastName;

	return React.createElement(
		"div",
		{ className: "card card-profile" },
		React.createElement(
			"div",
			{ className: "card-avatar" },
			React.createElement(
				"a",
				{ href: "#pablo" },
				React.createElement("img", { className: "img", src: "/img/faces/marc.jpg" })
			)
		),
		React.createElement(
			"div",
			{ className: "content" },
			React.createElement(
				"h6",
				{ className: "category text-gray" },
				"CEO / Co-Founder"
			),
			React.createElement(
				"h4",
				{ style: { textTransform: "capitalize" }, className: "card-title" },
				fullName
			),
			React.createElement(
				"a",
				{ href: "#pablo", className: "btn btn-primary btn-round" },
				"Follow"
			)
		)
	);
};