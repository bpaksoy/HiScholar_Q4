import React, { Component } from 'react'

export default (props) => {

	const user = props.user // can be null
  console.log("user", user)
  const personal = (user)? user.personal[0] : "";
	console.log("personal in infoCard", personal) // this is an object within an array see above

	return (
	<div>
	 {(user)?
	  <div className="card card-profile">
			<div className="col-md-12">
			 <div style={{backgroundColor: "#A8A8A8 "}} className="card-header">
         <h3 style={{textTransform:'capitalize'}} className="category text-gray">Personal</h3>
			 </div>
			</div>
      <div className="content">
				 <div className="col-md-12">
	          <h4>Lives in:<br/></h4>
						  <p style={{textTransform:'capitalize'}}>
								City: {(personal.city)? personal.city : "N/A"} <br/>
							  State: {(personal.state)? personal.state: "N/A" } <br/>
							  Country: {(personal.country)? personal.country: "N/A" }<br/>
							</p>
				  </div>
				   <div className="col-md-12">
					    <ul className="list-group list-group-flush">
					      <li className="list-group-item"><h4 className="card-profile">Academics:<br/></h4></li>
							</ul>
					  </div>
						<div className="col-md-12">
						  <div style={{textTransform:'capitalize'}}>
							   <div className="col-md-3">
								  <label className="control-label">GPA</label><br/>
									  {(personal.gpa)? personal.gpa : "N/A" } <br/>
							    </div>
							    <div className="col-md-3">
									 <label className="control-label">TOEFL</label><br/>
									  {(personal.toefl)? personal.toefl: "N/A" }<br/>
								  </div>
								  <div className="col-md-3">
									  <label className="control-label">SAT</label><br/>
									  {(personal.sat)? personal.sat: "N/A" }<br/>
									</div>
									<div className="col-md-3">
									  <label className="control-label">ACT</label><br/>
									  {(personal.act)? personal.act: "N/A" }<br/>
									</div>
                </div>
							</div>
					  </div>
         <button type="submit" className="btn btn-primary">Update Profile</button>
		 </div>
	 : null }
	 </div>
	)
}

// <button type="submit" className="btn btn-primary">Update Profile</button>
