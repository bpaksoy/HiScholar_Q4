"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var keys = require("../../../config/keys");
//import sha1 from "sha1";
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var axios = _interopRequire(require("axios"));

var superagent = _interopRequire(require("superagent"));

var ProfileCard = (function (Component) {
	function ProfileCard(props) {
		_classCallCheck(this, ProfileCard);

		_get(Object.getPrototypeOf(ProfileCard.prototype), "constructor", this).call(this, props);
		this.state = {
			user: props.user
		};
	}

	_inherits(ProfileCard, Component);

	_prototypeProperties(ProfileCard, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;
				superagent.get("/auth/currentuser").query(null).set("Accept", "application/json").end(function (err, response) {
					if (err) return;
					var payload = response.body;
					var user = payload.user; // this is the currently logged-in user
					var imgURL = user.thumbnail;
					_this.props.profilePicUrlReceived(imgURL);
				});
			},
			writable: true,
			configurable: true
		},
		uploadFile: {
			value: function uploadFile(event) {
				if (event) {
					event.preventDefault();
					var files = document.getElementById("file-input").files;
					var file = files[0];
					//console.log("file:", file);
					var imgPreview = document.getElementById("img-preview");

					var cloudName = keys.cloudinary.cloudName;
					//const apiSecret = keys.cloudinary.apiSecret;
					var uploadPreset = keys.cloudinary.uploadPreset;
					//console.log("uploadPreset", uploadPreset)
					//const apiKey = keys.cloudinary.apiKey;

					var timestamp = Date.now() / 1000;
					var url = "https://api.cloudinary.com/v1_1/" + cloudName + "/image/upload";

					var fd = new FormData();
					fd.append("file", file);
					fd.append("upload_preset", uploadPreset);
					fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
					//console.log("fd", fd)

					var config = {
						headers: { "X-Requested-With": "XMLHttpRequest" } };

					axios.post(url, fd, config).then(function (res) {
						//console.log(res.data)
						var imgURL = res.data.secure_url;
						axios.put("/dashboard/profile_picture", { thumbnail: imgURL }).then(function (result) {
							console.log("result is ", result);
						})["catch"](function (err) {
							console.log("we have not got the data!");
						});
					})["catch"](function (err) {
						console.log("err", err);
					});
				}
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var user = this.state.user; // can be null
				var fullName = user == null ? "" : user.firstName + " " + user.lastName;
				var thumbnail = this.props.user.currentUser.thumbnail ? this.props.user.currentUser.thumbnail : "";
				console.log("thumbnail: ", thumbnail);
				return React.createElement(
					"div",
					{ className: "card card-profile" },
					React.createElement(
						"div",
						{ className: "card-avatar" },
						thumbnail ? React.createElement("img", { id: "img-preview", className: "img", src: thumbnail }) : React.createElement("img", { id: "img-preview", className: "img", src: "/img/faces/marc.jpg" })
					),
					React.createElement(
						"label",
						{ className: "btn btn-primary btn-round", name: "file-upload" },
						React.createElement("input", { id: "file-input", onChange: this.uploadFile.bind(this), type: "file", accept: "image/*", style: { display: "none" } }),
						"Upload Photo"
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
			},
			writable: true,
			configurable: true
		}
	});

	return ProfileCard;
})(Component);





var stateToProps = function (state) {
	return {
		user: state.user,
		picture_url: state.picture_url
	};
};

var dispatchToProps = function (dispatch) {
	return {
		profilePicUrlReceived: function (url) {
			return dispatch(actions.profilePicUrlReceived(url));
		}
	};
};

module.exports = connect(stateToProps, dispatchToProps)(ProfileCard);



// .then(() => {
// 	axios.get("/dashboard/currentuser")
// 	.then(user => {
// 		imgPreview.src = user.thumbnail;
// 	})
// })