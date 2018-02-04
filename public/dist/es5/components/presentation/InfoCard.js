"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
	var user = props.user; // can be null
	//console.log("user", user)
	var personal = user ? user.personal : ""; // This is an object
	//console.log("personal in infoCard", personal)

	return React.createElement(
		"div",
		null,
		user ? React.createElement(
			"div",
			{ className: "card card-profile" },
			React.createElement(
				"div",
				{ className: "col-md-12" },
				React.createElement(
					"h3",
					{ style: { textTransform: "capitalize" }, className: "category text-gray" },
					"Personal"
				)
			),
			React.createElement(
				"div",
				{ className: "content" },
				React.createElement(
					"div",
					{ className: "col-md-12" },
					React.createElement(
						"h4",
						null,
						"Lives in:",
						React.createElement("br", null)
					),
					React.createElement(
						"p",
						{ style: { textTransform: "capitalize" } },
						personal.city ? personal.city : "N/A",
						" ",
						React.createElement("br", null),
						personal.state ? personal.state : "N/A",
						" ",
						React.createElement("br", null),
						personal.country ? personal.country : "N/A",
						React.createElement("br", null)
					)
				),
				React.createElement(
					"div",
					{ className: "col-md-12" },
					React.createElement(
						"h4",
						{ className: "card-profile" },
						"Academics:",
						React.createElement("br", null)
					)
				),
				React.createElement(
					"div",
					{ className: "col-md-12" },
					React.createElement(
						"div",
						{ style: { textTransform: "capitalize" } },
						React.createElement(
							"div",
							{ className: "col-md-3" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"GPA"
							),
							React.createElement("br", null),
							personal.gpa ? personal.gpa : "N/A",
							" ",
							React.createElement("br", null)
						),
						React.createElement(
							"div",
							{ className: "col-md-3" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"TOEFL"
							),
							React.createElement("br", null),
							personal.toefl ? personal.toefl : "N/A",
							React.createElement("br", null)
						),
						React.createElement(
							"div",
							{ className: "col-md-3" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"SAT"
							),
							React.createElement("br", null),
							personal.sat ? personal.sat : "N/A",
							React.createElement("br", null)
						),
						React.createElement(
							"div",
							{ className: "col-md-3" },
							React.createElement(
								"label",
								{ className: "control-label" },
								"ACT"
							),
							React.createElement("br", null),
							personal.act ? personal.act : "N/A",
							React.createElement("br", null)
						)
					)
				)
			),
			React.createElement(
				"button",
				{ type: "submit", className: "btn btn-primary" },
				"Update Profile"
			)
		) : null
	);
}

// <button type="submit" className="btn btn-primary">Update Profile</button>
;