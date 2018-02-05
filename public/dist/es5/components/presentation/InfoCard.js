"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
	var user = props.user; // can be null
	//console.log("user", user)
	var personal = user ? user.personal[0] : "";
	//console.log("personal in infoCard", personal) // this is an object within an array see above

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
					"div",
					{ style: { backgroundColor: "#A8A8A8 " }, className: "card-header" },
					React.createElement(
						"h3",
						{ style: { textTransform: "capitalize" }, className: "category text-gray" },
						"Personal"
					)
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
						"City: ",
						personal.city ? personal.city : "N/A",
						" ",
						React.createElement("br", null),
						"State: ",
						personal.state ? personal.state : "N/A",
						" ",
						React.createElement("br", null),
						"Country: ",
						personal.country ? personal.country : "N/A",
						React.createElement("br", null)
					)
				),
				React.createElement(
					"div",
					{ className: "col-md-12" },
					React.createElement(
						"ul",
						{ className: "list-group list-group-flush" },
						React.createElement(
							"li",
							{ className: "list-group-item" },
							React.createElement(
								"h4",
								{ className: "card-profile" },
								"Academics:",
								React.createElement("br", null)
							)
						)
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
				{ onClick: props.updateInformation.bind(undefined), className: "btn btn-primary" },
				"Update Profile"
			)
		) : null
	);
}

//onClick={props.updateInformation.bind(this)}
//<SmallProfileForm onUpdate={props.onUpdate} user={user} clicked={clicked} handleChange={props.handleChange} handleCity={props.handleCity} handleCountry={props.handleCountry}/>
// <button type="submit" className="btn btn-primary">Update Profile</button>
//<ProfileForm onUpdate={props.onUpdate} user={user} personal={personal} clicked={clicked} handleChange={props.handleChange} />
;