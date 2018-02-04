"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
	var user = props.user; // can be null
	//console.log("user in the personal_statement form", user);
	var personal_statement = user ? user.personal_statement : "";
	//console.log("personal statement in the component", personal_statement)
	return React.createElement(
		"div",
		null,
		React.createElement(
			"form",
			null,
			React.createElement(
				"div",
				{ className: "card" },
				React.createElement(
					"div",
					{ className: "card-content" },
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-md-12" },
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"h4",
									{ style: { textTransform: "capitalize" }, className: "card-title" },
									"Personal Statement"
								),
								React.createElement(
									"div",
									{ className: "label-floating" },
									user ? React.createElement(
										"div",
										null,
										React.createElement("textarea", { name: "personal_statement", defaultValue: user.personal_statement, onChange: props.handleStatement.bind(undefined), style: style.textarea, className: "form-control", rows: "15" })
									) : null
								)
							)
						)
					)
				),
				React.createElement(
					"button",
					{ onClick: props.submitStatement.bind(undefined), className: "btn btn-primary pull-right" },
					"Update Profile"
				)
			)
		)
	);
};

var style = {
	textarea: {
		background: "#fffffa",
		border: "1px solid #ddd",
		padding: 16
	}
}

//defaultValue={user.personal.personal_statement}
//<div><textarea name="personal_statement" onChange={props.handleStatement.bind(this)} style={style.textarea} className="form-control" rows="15"></textarea></div>
;