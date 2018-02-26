"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
  searchedUniversity: "",
  selectedUniversities: {},
  savedUniversities: {} };

function selectedUniversityReceivedReducer(_x, action) {
  var state = arguments[0] === undefined ? {} : arguments[0];
  var _action$data = action.data;
  var data = _action$data === undefined ? [] : _action$data;
  var all_schools = {};
  data.map(function (university) {
    all_schools[university._id] = university;
  });
  var all_selected_universities = Object.assign({}, state.selectedUniversities, all_schools);
  return Object.assign({}, state, { selectedUniversities: all_selected_universities });
}

function addNewSavedUniversityReducer(_x, action) {
  var state = arguments[0] === undefined ? {} : arguments[0];
  var _action$data = action.data;
  var data = _action$data === undefined ? [] : _action$data;
  var all_schools = {};
  data.map(function (university) {
    all_schools[university._id] = university;
  });
  var all_saved_universities = Object.assign({}, state.savedUniversities, all_schools);
  return Object.assign({}, state, { savedUniversities: all_saved_universities });
  return state;
}

function removeSavedUniversityReducer(_x, action) {
  var state = arguments[0] === undefined ? {} : arguments[0];
  var varsity_id_to_remove = action.data;
  var all_saved_universities = state.savedUniversities;
  delete all_saved_universities[varsity_id_to_remove];
  return Object.assign({}, state, { savedUniversities: all_saved_universities });
}

function removeSelectedUniversityReducer(_x, action) {
  var state = arguments[0] === undefined ? {} : arguments[0];
  var varsity_id_to_remove = action.data;
  var all_selected_universities = state.selectedUniversities;
  delete all_selected_universities[varsity_id_to_remove];
  return Object.assign({}, state, { selectedUniversities: all_selected_universities });
}

function searchedUniversityReceievedReducer(_x, action) {
  var state = arguments[0] === undefined ? {} : arguments[0];
  state.searchedUniversity = action.data;
  return state;
}

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];
  var newState = Object.assign({}, state);

  switch (action.type) {

    case constants.SELECTED_UNIVERSITIES_RECEIVED:
      return selectedUniversityReceivedReducer(newState, action);

    case constants.SAVED_UNIVERSITIES_RECEIVED:
      return addNewSavedUniversityReducer(state, action);

    case constants.REMOVE_SAVED_UNIVERSITY:
      return removeSavedUniversityReducer(state, action);

    case constants.REMOVE_SELECTED_UNIVERSITY:
      return removeSelectedUniversityReducer(state, action);

    case constants.SEARCHED_UNIVERSITY_RECEIVED:
      return searchedUniversityReceievedReducer(state, action);

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