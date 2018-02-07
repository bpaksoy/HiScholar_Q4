"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


var userReducer = _interopRequire(require("./userReducer"));

var universityReducer = _interopRequire(require("./universityReducer"));

exports.userReducer = userReducer;
exports.universityReducer = universityReducer;
Object.defineProperty(exports, "__esModule", {
	value: true
});