import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import Nav  from './Nav';
import SavedUniversities  from '../presentation/SavedUniversities';
import SelectedUniversities from "../presentation/SelectedUniversities";
import axios from "axios";
import superagent from 'superagent';

class University extends Component {

 constructor(props) {
  super(props);
  this.state = {
    shouldShowSavedUniversities: true
  }

  this.getSavedUniversities = this.getSavedUniversities.bind(this);
  this.toggleSavedSchools = this.toggleSavedSchools.bind(this);
  this.deleteSchool = this.deleteSchool.bind(this);
}

componentDidMount() {
  this.getSavedUniversities();
}

getSavedUniversities() {
  axios.get("/api/universities/user/savedschools")
  .then(result => {
    this.props.savedUniversitiesReceived(result.data) // this is an array of universities
  })
  .catch(err => {
    console.log("we have not got the data!");
  });
}

saveSchool(university) {
  this.props.savedUniversitiesReceived([university]);
  axios.put("/api/universities/savedschools", {
    data: university._id
  }).then(result => {
    //Success
  })
  .catch(err => {
    console.log("Error occured while saving school " + err);
  });
}

deleteSchool(university_id) {
  this.props.removeUniversityFromSaved(university_id);
  axios.delete("/api/universities/savedschools/" + university_id)
  .then(result => {
    console.log("deleted school is ", result);
  })
  .catch(err => {
    console.log("Error occured while deleting school " + err);
  });
}

toggleSavedSchools() {
  this.setState({
    shouldShowSavedUniversities: !this.state.shouldShowSavedUniversities
  })
}
render() {
    const { shouldShowSavedUniversities = false } = this.state;
    let { selectedUniversities = [], savedUniversities = [] } = this.props;
    const saved_universities_visible = !!savedUniversities.length && shouldShowSavedUniversities;
    const see_saved_button_text = saved_universities_visible  ? 'Hide saved' : 'See saved';
    return(
      <div className='universities_section'>
        <div>
         {
            (selectedUniversities.length) ?
            <div className='row'>
              <h3> Found { selectedUniversities.length } { selectedUniversities.length == 1 ? 'result' : 'results'}  </h3>
              <div>
                <SelectedUniversities
                  removeUniversityFromSelected={this.props.removeUniversityFromSelected}
                  savedUniversities={savedUniversities}
                  saveSchool={this.saveSchool.bind(this)}
                  selectedUniversities={selectedUniversities}
                  deleteSchool={this.deleteSchool}
                />
              </div>
            </div>
           : null
          }
        </div>
       <div>

         {
            <div className='row'>
              <div className="col-md-8">
                { saved_universities_visible ? <h3>Saved Universities</h3> : null }
              </div>
              <div className="col-md-4">
                {
                  !!savedUniversities.length &&
                  <button href="#" onClick={this.toggleSavedSchools} className="btn btn-primary pull-right" role="button">
                    {see_saved_button_text}
                  </button>
                }
              </div>
              {
                saved_universities_visible &&
                <SavedUniversities
                  savedUniversities={savedUniversities}
                  shouldShowSavedUniversities={shouldShowSavedUniversities}
                  getSavedUniversities={this.getSavedUniversities}
                  deleteSchool={this.deleteSchool}
                  toggleSavedSchools={this.toggleSavedSchools}
                />
              }
            </div>
          }
       </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { university = {} } = state;
  const { selectedUniversities = {}, savedUniversities = {} } = university;
  const selected_universities_list = Object.values(selectedUniversities);
  const saved_universities_list = Object.values(savedUniversities);

  return {
    selectedUniversities: selected_universities_list,
    savedUniversities: saved_universities_list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    schoolCardClosed: (index) => dispatch(actions.schoolCardClosed(index)),
    savedUniversitiesReceived: (universities) => dispatch(actions.savedUniversitiesReceived(universities)),
    removeUniversityFromSaved: (universities_id) => dispatch(actions.removeUniversityFromSaved(universities_id)),
    removeUniversityFromSelected: (universities_id) => dispatch(actions.removeUniversityFromSelected(universities_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(University);
