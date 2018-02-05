import React, { Component } from 'react'

export default (props) => {

	return (
		<nav className="navbar navbar-transparent navbar-absolute">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#"> Dashboard </a>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">
								<i className="material-icons">notifications</i>
								<span className="notification">5</span>
								<p className="hidden-lg hidden-md">Notifications</p>
							</a>
						</li>
						<li>
							<a href="#">Newsfeed</a>
						</li>
						<li>
							<a href="/auth/logout">Sign Out</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	)

}
