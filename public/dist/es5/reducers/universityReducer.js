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
      //console.log("newState", newState);
      return newState;

    case constants.SCHOOL_CARD_CLOSED:
      newState.selectedUniversities = newState.selectedUniversities.filter(function (el, ind, arr) {
        return ind !== action.data;
      });
      return newState;

    case constants.SAVED_UNIVERSITIES_RECEIVED:
      console.log("action.data", action.data); // this is an array of universities coming from the axios req.
      newState.savedUniversities = action.data;
      console.log("newState", newState);
      return newState;

    default:
      return state;
  }
}




// if(!newState.selectedUniversities.length){
//   newState.selectedUniversities.push(action.data);
//   console.log("newState", newState)
// } else{
//   const exists = newState.selectedUniversities.filter(el => el["_id"] === action.data("_id"));
//   console.log("exists", exists, exists.length,"action.data", action.data)
//   (!exists.length)?
// }
;