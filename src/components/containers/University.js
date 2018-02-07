import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import  Nav  from './Nav';
import axios from "axios";
import superagent from 'superagent';

class University extends Component {

 constructor(props){
    super(props);
    this.state = {
     isSaved: false
    };

  }

 saveSchool(university, event){
   if(event){
     console.log("university in save school", university)
     event.preventDefault();
     //const selectedUniversities = this.props.university.selectedUniversities;
     const universityName = university.school_name;
     console.log("universityName", universityName);
     axios.put("/api/universities/savedschools", {[universityName]: university}).then(function (result){
 			  console.log("saved school is ", result);
 			 })["catch"](function (err) {
 		 console.log("we have not got the data!");
 		 });
   }
 }


  render(){
  let selectedUniversities = (this.props.university.selectedUniversities.length) ? this.props.university.selectedUniversities : [];
  //console.log("selectedUniversities in the University component", selectedUniversities)
  console.log("isSaved: ", this.state.isSaved);
  selectedUniversities = selectedUniversities.map((university, index) => {
    return(
      <div key={index} className="row" onClick={this.saveSchool.bind(this, university)}>
        <div className="col-sm-6 col-md-6">
          <div className="thumbnail">
            <img src={university.imgURL} alt="university_img"/>
            <div className="caption">
              <h3>{university.school_name}</h3>
              <p>{university.description}</p>
              <small className="text-muted">Ranked #{university.ranking} among universities in the US.</small><br/>
              <small className="text-muted">Tuition $ {university.tuition}</small><br/>
              <small className="text-muted">Acceptance rate: {university.acceptance_rate}%</small>
              <p>
                  <a href="#" className="btn btn-primary" role="button">Save <i className="fa fa-heart"></i></a>
              </p>
            </div>
          </div>
        </div>
     </div>
    );
  })

    return(
      <div>
       {(selectedUniversities.length)?
        <div>
          <h3>This is University component!</h3>
          {selectedUniversities}
        </div>
       : null }
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
	}
 }

export default connect(stateToProps, dispatchToProps)(University);

const divStyle ={
  padding: "5px 5px 5px 5px",
  margin: "10px 10px 10px 10px"
};
