import React, { Component } from 'react'

export default (props) => {
	const user =  props.user;
	//console.log("user in the profile form", user)
	const personal = (props.personal);

	return (
		<div className="card">
			<div className="card-header" data-background-color="purple">
				<h4 className="title">Personal Info</h4>
				<p className="category">Complete your profile</p>
			</div>
			<div className="card-content">
				<form>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group label-floating">
								<label className="control-label">First Name</label>
								<input name="firstName" onChange={props.handleChange.bind(this, "firstName")} style={{textTransform:"capitalize"}}  defaultValue={user.firstName} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group label-floating">
								<label className="control-label">Last Name</label>
								<input name="lastName" onChange={props.handleChange.bind(this, "lastName")} style={{textTransform:"capitalize"}} defaultValue={user.lastName} type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">City</label>
								<input name="city" onChange={props.handleChange.bind(this, "city")} value={personal.city} type="text" className="form-control" />
							</div>
						</div>
							<div className="col-md-3">
								<div className="form-group label-floating">
									<label className="control-label">State</label>
									<input name="state" onChange={props.handleChange.bind(this, "state")} value={personal.state} type="text" className="form-control" />
								</div>
							</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">Country</label>
								<input name="country" onChange={props.handleChange.bind(this, "country")} value={personal.country} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">Zip Code</label>
								<input name="zip_code" onChange={props.handleChange.bind(this, "zip_code")} value={personal.zip_code} type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">GPA</label>
								<input name="gpa"  onChange={props.handleChange.bind(this, "gpa")} value={personal.gpa} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">TOEFL</label>
								<input name="toefl" onChange={props.handleChange.bind(this, "toefl")} value={personal.toefl} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">ACT</label>
								<input name="act" onChange={props.handleChange.bind(this, "act")} value={personal.act} type="email" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">SAT</label>
								<input name="sat" onChange={props.handleChange.bind(this, "sat")} value={personal.sat} type="email" className="form-control" />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="form-group">
								<label>Personal Statement</label>
								<div className="label-floating">
									<textarea name="personal_statement" onChange={props.handleChange.bind(this, "personal_statement")} value={personal.personal_statement} style={style.textarea} className="form-control" rows="15"></textarea>
								</div>
							</div>
						</div>
					</div>
					<button onClick={props.onUpdate.bind(this)} type="submit" className="btn btn-primary pull-right">Update Profile</button>
					<div className="clearfix"></div>
				</form>
			</div>
		</div>
	)
}
// onClick={props.onUpdate.bind(this)}
// defaultValue={}

const style = {
	textarea: {
		background: '#fffffa',
		border: '1px solid #ddd',
		padding: 16
	}
}
