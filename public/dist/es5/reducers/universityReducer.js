"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
  searchedUniversity: "",
  selectedUniversities: [],
  savedUniversities: []
};

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];
  var newState = Object.assign({}, state);

  switch (action.type) {

    case constants.SEARCHED_UNIVERSITY_RECEIVED:
      newState.searchedUniversity = action.data;
      //console.log("action.data", action.data);
      //console.log("newState: ", newState);
      return newState;

    case constants.SELECTED_UNIVERSITY_RECEIVED:
      newState.selectedUniversities.push(action.data);
      //console.log("action.data", action.data)
      //console.log("newState: ", newState);
      return newState;

    case constants.SAVED_UNIVERSITY_RECEIVED:
      newState.savedUniversities.push(action.data);
      // console.log("action.data", action.data)
      // console.log("newState: ", newState);
      return newState;

    case constants.SCHOOL_CARD_CLOSED:
      newState.selectedUniversities = newState.selectedUniversities.filter(function (el, ind, arr) {
        return ind !== action.data;
      });
      console.log("action.data", action.data);
      console.log("newState: ", newState);
      return newState;

    default:
      return state;
  }
};