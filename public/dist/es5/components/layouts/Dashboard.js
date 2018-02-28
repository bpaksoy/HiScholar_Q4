"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _presentation = require("../presentation");

var Footer = _presentation.Footer;
var ProfileCard = _presentation.ProfileCard;
var ProfileForm = _presentation.ProfileForm;
var Profile = require("../containers").Profile;
var Newsfeed = require("../pages").Newsfeed;
var Nav = _interopRequire(require("../containers/Nav"));

var Sidebar = _interopRequire(require("../containers/Sidebar"));

var _reactRouterDom = require("react-router-dom");

var Router = _reactRouterDom.BrowserRouter;
var Route = _reactRouterDom.Route;
var Link = _reactRouterDom.Link;
var hashHistory = _reactRouterDom.hashHistory;
var Dashboard = (function (Component) {
	function Dashboard() {
		_classCallCheck(this, Dashboard);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Dashboard, Component);

	_prototypeProperties(Dashboard, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					{ className: "wrapper" },
					React.createElement(Sidebar, null),
					React.createElement(
						Router,
						{ history: hashHistory },
						React.createElement(
							"div",
							{ className: "main-panel" },
							React.createElement(Nav, null),
							React.createElement(
								"div",
								{ className: "content" },
								React.createElement(
									"div",
									{ className: "container-fluid" },
									React.createElement(
										"div",
										null,
										React.createElement(Route, { exact: true, path: "/", component: Profile }),
										React.createElement(Route, { path: "/newsfeed", component: Newsfeed })
									)
								)
							),
							React.createElement(Footer, null)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Dashboard;
})(Component);

module.exports = Dashboard;