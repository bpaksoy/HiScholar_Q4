import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import  Nav  from './Nav';
import  SavedUniversities  from '../presentation/SavedUniversities';
import axios from "axios";
import superagent from 'superagent';

class University extends Component {

 constructor(props){
    super(props);
    this.state = {
     isSaved: false,
     clicked: false
    };

  }
 getSavedUniversities(event){
   if(event){
      axios.get("/api/universities/user/savedschools")
      .then(result => {
 			  console.log("saved schools are ", result);
        this.props.savedUniversitiesReceived(result.data) // this is an array of universities
      })["catch"](err => {
 		 console.log("we have not got the data!");
 		 });
  }
 }


 saveSchool(university, index, event){
   if(event){
     //console.log("university in save school", university);
     event.preventDefault();
     const universityName = university.school_name;
     //console.log("universityName", universityName);
     axios.put("/api/universities/savedschools", {[universityName]: university}).then(function (result){
       // this.setState({
       //   isSaved: !this.state.isSaved
       // })
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
     console.log("index", index)
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
  const numberWithCommas = (x) => {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let savedUniversities = (this.props.university.savedUniversities.length)? this.props.university.savedUniversities : [];

 const isSaved = this.state.isSaved;
 //console.log("isSaved: ", isSaved);
 const clicked = this.state.clicked;
 console.log("clicked", clicked);

  selectedUniversities = selectedUniversities.map((university, index) => {
    return(
        <div key={index}><i onClick={this.closeSchoolCard.bind(this, index)} style={{size: "20"}} className="fa fa-window-close pull-right"></i>
          <div className="thumbnail">
            <img style={style.img} className="card-img-top" src={university.imgURL} alt="university_img"/>
            <div className="caption">
              <h3>{university.school_name}</h3>
              <p>{university.description}</p>
              <small className="text-muted">Ranked #{university.ranking} among universities in the US.</small><br/>
              <small className="text-muted">Annual tuition $ {numberWithCommas(university.tuition)}</small><br/>
              <small className="text-muted">Acceptance rate: {university.acceptance_rate}%</small>
              <p>{(!isSaved)?
                  <a href="#"  onClick={this.saveSchool.bind(this, university, index)} className="btn btn-primary" role="button">Save</a>:
                  <a href="#"  onClick={this.saveSchool.bind(this, university, index)} className="btn btn-primary" role="button">Saved <i className="fa fa-heart"></i></a>
                }
              </p>
            </div>
          </div>
        </div>
    );
  })


    return(
      <div>
        <div className="col-md-12" style={{display:"inline"}}>
         {(selectedUniversities.length)?
          <div className="col-md-6">
            <h3>This is University component!</h3>
            <div style={style.card} className="row">{selectedUniversities}</div>
          </div>
         : null }
        </div>
       {(!savedUniversities.length)?
        <div className="col-md-12"><a href="#" onClick={this.getSavedUniversities.bind(this)} className="btn btn-primary" role="button">See Saved</a></div>:
        <SavedUniversities clicked={clicked} closeSavedUniversities={this.closeSavedUniversities.bind(this)} savedUniversities={savedUniversities}/>
       }
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
     savedUniversitiesReceived: (universities) => dispatch(actions.savedUniversitiesReceived(universities))
	 }
 }

export default connect(stateToProps, dispatchToProps)(University);



const style = {
  card : {
    display: "-webkit-box",
    display: "-webkit-flex",
    display: "ms-flexbox",
    display: "flex",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    WebkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    width: "100%"
  },
  img : {
    WebkitBoxFlex: "0",
    WebkitFlex: "0 0 auto",
    msFlex: "0 0 auto",
    flex: "0 0 auto"
  }
}
