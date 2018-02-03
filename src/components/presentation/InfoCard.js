import React, { Component } from 'react'

export default (props) => {

	const user = props.user // can be null
  //console.log("user", user)
  // const personal = user.personal;
  // let personalInfo = Object.keys(personal).map((key, index) => { <li>{key}:{personal[key]}</li>})

	return (
		<div className="card card-profile">
			<div className="col-md-12">
          <i className="material-icons">school</i><h4 style={{textTransform:'capitalize'}} className="card-title"> Personal</h4>
			</div>
      <div className="content">
         <ul>
          {(user )? "" : ""}
        </ul>
      </div>
		</div>
	)
}

 // {(personalInfo)? personalInfo : null}
// <div className="col-md-4">
//    <label className="control-label">{user.personal.city}</label><br/>
// </div>
// <div className="col-md-4">
//    <label className="control-label">{user.personal.state}</label><br/>
// </div>
// <div className="col-md-4">
//    <label className="control-label">{user.personal.country}</label><br/>
// </div
// <div className="col-md-4">
//    <label className="control-label">{user.personal.city}</label><br/>
// </div
//  <label className="control-label">GPA</label><br/>
//  <label className="control-label">TOEFL</label><br/>
//  <label className="control-label">SAT</label><br/>
//  <label className="control-label">ACT</label><br/>
