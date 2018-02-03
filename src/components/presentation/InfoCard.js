import React, { Component } from 'react'

export default (props) => {

	const user = props.user // can be null
  //console.log("user", user)
  const personal = props.personal;
	//console.log(personal)

	return (
	 <div className="card card-profile">

			<div className="col-md-12">
       <h3 style={{textTransform:'capitalize'}} className="category text-gray">Personal</h3>
			</div>
      <div className="content">
				 <div className="col-md-12">
	          <h4>Lives in:<br/></h4>
						  <p style={{textTransform:'capitalize'}}>
								{(personal.city)? personal.city : null} <br/>
								{(personal.state)? personal.state: null } <br/>
								{(personal.country)? personal.country: null }<br/>
							</p>
				  </div>
				   <div className="col-md-12">
					  <h4 className="card-profile">Academics:<br/></h4>
					  </div>
						<div className="col-md-12">
						  <div style={{textTransform:'capitalize'}}>
							   <div className="col-md-3">
								  <label className="control-label">GPA</label><br/>
									  {(personal.gpa)? personal.gpa : null} <br/>
							    </div>
							    <div className="col-md-3">
									 <label className="control-label">TOEFL</label><br/>
									  {(personal.toefl)? personal.toefl: null }<br/>
								  </div>
								  <div className="col-md-3">
									  <label className="control-label">SAT</label><br/>
									  {(personal.sat)? personal.sat: null }<br/>
									</div>
									<div className="col-md-3">
									  <label className="control-label">ACT</label><br/>
									  {(personal.act)? personal.act: null }<br/>
									</div>
                </div>
							</div>
					  </div>
         <button type="submit" className="btn btn-primary">Update Profile</button>
		 </div>
	)
}

// <button type="submit" className="btn btn-primary">Update Profile</button>
