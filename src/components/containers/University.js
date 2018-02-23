import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import Nav  from './Nav';
import SavedUniversities  from '../presentation/SavedUniversities';
import SelectedUniversities from "../presentation/SelectedUniversities";
import axios from "axios";
import superagent from 'superagent';

class University extends Component {

 constructor(props){
    super(props);
    this.state = {
     isSaved: false,
     clicked: false,
     buttonChange: false,
    };
  }

componentDidMount(){
  axios.get("/api/universities/user/savedschools")
  .then(result => {
    //console.log("saved schools are ", result);
    this.props.savedUniversitiesReceived(result.data) // this is an array of universities
  })["catch"](err => {
   console.log("we have not got the data!");
 });
 this.setState({
  isSaved : false
 })
}


 getSavedUniversities(event){
   if(event){
      axios.get("/api/universities/user/savedschools")
      .then(result => {
 			  //console.log("saved schools are ", result);
        this.props.savedUniversitiesReceived(result.data) // this is an array of universities
      })["catch"](err => {
 		 console.log("we have not got the data!");
 		 });
     this.setState({
       isSaved: !this.state.isSaved,
       clicked: !this.state.clicked
     })
  }
 }


 saveSchool(university, index, event){
   if(event){

     event.preventDefault();
     let universityName;
     for(var key in university){
       universityName = key;
     }

     console.log("university", university,"universityName", universityName);
     university = university[universityName];
     axios.put("/api/universities/savedschools", {[universityName]: university}).then(function (result){
 			  console.log("saved school is ", result);
        //const savedSchool = result.data.savedSchools[result.data.savedSchools.length - 1];
        this.props.savedUniversitiesReceived(university);
 			 })["catch"](function (err) {
 		 console.log("we have not got the data!");
 		 });
     this.setState({
       isSaved: !this.state.isSaved,
       buttonChange: !this.state.buttonChange
     })
  }
}

deleteSchool(university, index, event){
  if(event){
    event.preventDefault();
     const universityName = university.school_name;
     axios.delete("/api/universities/savedschools", {[universityName]: university}).then(function (result){
         console.log("saved school is ", result);
        })["catch"](function (err) {
      console.log("we have not got the data!");
      });
      this.setState({
        isSaved: !this.state.isSaved
      })

   }

}

  closeSchoolCard(index, event){
    if(event){
     event.preventDefault()
    // console.log("index", index)
     this.props.schoolCardClosed(index);
   }
  }

  closeSavedUniversities(event){
    if(event){
      event.preventDefault();
      this.setState({
        clicked:!this.state.clicked
      })
    }
  }

render(){
  let selectedUniversities = (this.props.university.selectedUniversities.length) ? this.props.university.selectedUniversities : [];
  //console.log("selectedUniversities in the University component", selectedUniversities)
  let savedUniversities = (this.props.university.savedUniversities.length)? this.props.university.savedUniversities : [];
  console.log("saved universities in the university component", savedUniversities);

  const isSaved =  this.state.isSaved;
  console.log("isSaved: ", isSaved);
  const clicked = this.state.clicked;
  console.log("clicked", clicked);
  const buttonChange = this.state.buttonChange;

    return(
      <div>
        <div>
         {(selectedUniversities.length)?
          <div>
            <h3>This is University component!</h3>
            <div className="col-md-6"><SelectedUniversities isSaved={isSaved} buttonChange={buttonChange} savedUniversities={savedUniversities} closeSchoolCard={this.closeSchoolCard.bind(this)} saveSchool={this.saveSchool.bind(this)} deleteSchool={this.deleteSchool.bind(this)} selectedUniversities={selectedUniversities}/></div>
          </div>
         : null }
        </div>
       <div>
         {(!savedUniversities.length)?
          null:
          <div>
            <div className="col-md-6"><SavedUniversities getSavedUniversities={this.getSavedUniversities.bind(this)} clicked={clicked}  closeSavedUniversities={this.closeSavedUniversities.bind(this)} savedUniversities={savedUniversities}/></div>
          </div>
         }
       </div>
      </div>
    );
  }

}

const stateToProps = (state) => {
	return {
    university: state.university
	}
}

const dispatchToProps = (dispatch) => {
	return {
     schoolCardClosed: (index) => dispatch(actions.schoolCardClosed(index)),
     savedUniversitiesReceived: (universities) => dispatch(actions.savedUniversitiesReceived(universities)),
     saveReceived: (saveState) => dispatch(actions.saveReceived(saveState))
	 }
 }

export default connect(stateToProps, dispatchToProps)(University);
