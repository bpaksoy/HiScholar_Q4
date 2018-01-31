import React, { Component } from 'react'

export default (props) => {
	const user = (props.user);
  //console.log("user in Profile Form is", user);

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
								<input onChange={(event) => props.handleChange(event)} name="firstName" style={{textTransform:"capitalize"}} defaultValue={user.firstName} type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group label-floating">
								<label className="control-label">Last Name</label>
								<input onChange={(event) => props.handleChange(event)} name="lastName" style={{textTransform:"capitalize"}} defaultValue={user.lastName} type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">City</label>
								<input onChange={(event) => props.handleChange(event)} name="city" type="text" className="form-control" />
							</div>
						</div>
							<div className="col-md-3">
								<div className="form-group label-floating">
									<label className="control-label">State</label>
									<input onChange={(event) => props.handleChange(event)} name="state" type="text" className="form-control" />
								</div>
							</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">Country</label>
								<input onChange={(event) => props.handleChange(event)} name="country" type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">Zip Code</label>
								<input onChange={(event) => props.handleChange(event)} name="zip_code" type="text" className="form-control" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">GPA</label>
								<input onChange={(event) => props.handleChange(event)} name="gpa" type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">TOEFL</label>
								<input onChange={(event) => props.handleChange(event)} name="toefl" type="text" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">ACT</label>
								<input onChange={(event) => props.handleChange(event)} name="act" type="email" className="form-control" />
							</div>
						</div>
						<div className="col-md-3">
							<div className="form-group label-floating">
								<label className="control-label">SAT</label>
								<input onChange={(event) => props.handleChange(event)} name="sat" type="email" className="form-control" />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="form-group">
								<label>Personal Statement</label>
								<div className="label-floating">
									<textarea onChange={(event) => props.handleChange(event)} name="personal_statement" style={style.textarea} className="form-control" rows="15"></textarea>
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
