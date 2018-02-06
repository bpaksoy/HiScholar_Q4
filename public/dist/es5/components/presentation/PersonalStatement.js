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
	var noStatement = props.noStatement;
	console.log("no statement", noStatement);

	return React.createElement(
		"div",
		null,
		React.createElement(
			"form",
			{ onSubmit: props.submitStatement },
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
										React.createElement("textarea", { name: "personal_statement", defaultValue: user.personal_statement, onChange: props.handleStatement, style: style.textarea, className: "form-control", rows: "15" })
									) : null
								)
							)
						)
					)
				),
				React.createElement(
					"button",
					{ disabled: noStatement, className: "btn btn-primary pull-right" },
					"Update Statement"
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