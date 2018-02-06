import React, { Component } from 'react'

export default (props) => {
	const user =  props.user;
	console.log("user in the profile form", user)
	user.personal = user.personal.length ? user.personal[0] : [];
	const isDisabled = props.isDisabled;
	//console.log("isDisabled in the ProfileForm", isDisabled);
	//console.log("user in the profile form", user)

	return (
	<div>
	 {(!user.personal.length)?
		<div className="card">
			<div className="card-header" data-background-color="purple">
				<h4 className="title">Personal Info</h4>
				<p className="category">Complete your profile</p>
			</div>
			<div className="card-content">
				<form onChange={props.handleChange.bind(this)} >
					<div className="row">
						<div className="col-md-6">
							<div className="form-group label-floating">
								<label className="control-label">First Name</label>
								<input name="firstName" style={{textTransform:"capitalize"}}  defaultValue={user.firstName} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group label-floating">
								<label className="control-label">Last Name</label>
								<input name="lastName" style={{textTransform:"capitalize"}} defaultValue={user.lastName} type="text" className="form-control"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="form-group required label-floating">
								<label className="control-label"><i className="fa fa-asterisk" style={{fontSize:6,color:"red"}}></i>City</label>
								  <input name="city" defaultValue={user.personal.city} onChange={props.handleCity.bind(this)} className="form-control" type="text"/>
							</div>
						</div>
							<div className="col-md-3">
								<div className="form-group label-floating">
									<label className="control-label">State</label>
									<input name="state" defaultValue={user.personal.state} type="text" className="form-control" />
								</div>
							</div>
						<div className="col-md-3">
							<div className="form-group required label-floating">
								<label className="control-label"><i className="fa fa-asterisk" style={{fontSize:6,color:"red"}}></i>Country</label>
								  <input name="country" className="form-control" defaultValue={user.personal.country} onChange={props.handleCountry.bind(this)} type="text"/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">Zip Code</label>
								<input name="zip_code" className="form-control" defaultValue={user.personal.zip_code} type="text"  />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">GPA</label>
								<input name="gpa" defaultValue={user.personal.gpa} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">TOEFL</label>
								<input name="toefl" defaultValue={user.personal.toefl} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">ACT</label>
								<input name="act" defaultValue={user.personal.act} type="email" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">SAT</label>
								<input name="sat" defaultValue={user.personal.sat} type="email" className="form-control" />
							</div>
						</div>
					</div>
					<button onClick={props.onUpdate.bind(this)} type="submit" disabled={isDisabled} className="btn btn-primary pull-right">Update Profile</button>
					<div className="clearfix"></div>
				</form>
			</div>
		</div>
	   : null}
	 </div>
	)
}
