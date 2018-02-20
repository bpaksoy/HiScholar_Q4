import React, { Component } from 'react';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default (props) => {

 let selectedUniversities = (props.selectedUniversities.length)? props.selectedUniversities : [];
 //console.log("saved universities in the component", savedUniversities);
 let savedUniversities = (props.savedUniversities.length)? props.savedUniversities : [];
 console.log("saved Unis", savedUniversities);

 const lastSearched = (selectedUniversities.length)? selectedUniversities[selectedUniversities.length - 1] : "";
 //console.log("selectedUniversity", selectedUniversity);

 let universityName;
 for(var key in lastSearched){
   universityName = key;
 }

 console.log("universityName", universityName)

 const compare = (savedUniversities.length)? savedUniversities.filter(university => {
  return  [...university, university[universityName]];
}) : null;

console.log("compare", compare)

 let selectedUniversity = selectedUniversities.map((university, index, array) => {
   let schoolName;
   for(var key in university){
     schoolName = key;
   }
   let selected = university[schoolName];
   console.log("selected", selected, schoolName)
   let button = (compare.length)? compare.filter(university => {
     //console.log("university[schoolName]", university[schoolName], schoolName)
    return university[schoolName];
   }): [];

   console.log("button", button);
   return(
       <div key={index}><i onClick={props.closeSchoolCard.bind(this, index)} style={{size: "20"}} className="fa fa-window-close pull-right"></i>
         <div className="thumbnail">
           <img style={style.img} className="card-img-top" src={selected.imgURL} alt="university_img"/>
           <div className="caption">
             <h3>{selected.school_name}</h3>
             <p>{selected.description}</p>
             <small className="text-muted">Ranked #{selected.ranking} among universities in the US.</small><br/>
             <small className="text-muted">Annual tuition $ {numberWithCommas(selected.tuition)}</small><br/>
             <small className="text-muted">Acceptance rate: {selected.acceptance_rate}%</small>
             <p>{(button.length)? <a href="/" onClick={props.deleteSchool.bind(this, university, index)} className="btn btn-primary" role="button">Saved <i className="fa fa-heart"></i></a> : <a href="/"  onClick={props.saveSchool.bind(this, university, index)} className="btn btn-primary" role="button">Save</a>}</p>
           </div>
         </div>
       </div>
   );
 })



	return (
	  <div style={style.card}>{selectedUniversity}</div>
	)
}

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
