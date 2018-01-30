import React, { Component } from 'react'

export default (props) => {

	const user = props.user // can be null
	const fullName = (user == null) ? '' : user.firstName + ' ' + user.lastName

	return (
		<div className="card card-profile">
			<div className="card-avatar">
				<a href="#pablo">
					<img className="img" src="/img/faces/marc.jpg" />
				</a>
			</div>
			<div className="content">
				<h6 className="category text-gray">CEO / Co-Founder</h6>
				<h4 style={{textTransform:'capitalize'}} className="card-title">{ fullName }</h4>
				<a href="#pablo" className="btn btn-primary btn-round">Follow</a>
			</div>
		</div>
	)
}
