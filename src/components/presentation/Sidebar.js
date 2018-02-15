import React, { Component } from 'react'

export default (props) => {

	return (
		<div className="sidebar" data-color="purple" data-image="/img/sidebar-1.jpg">
			<div className="logo">
				<img className="img" src="/img/Logo.png" />
			</div>
			<div className="sidebar-wrapper">
				<ul className="nav">
					<li className="active">
						<a href="dashboard.html">
							<i className="material-icons">dashboard</i>
							<p>Dashboard</p>
						</a>
					</li>
					<li>
						<a href="./user.html">
							<i className="material-icons">person</i>
							<p>Browse</p>
						</a>
					</li>
					<li>
						<a href="/">
							<i className="material-icons">content_paste</i>
							<p>Saved Schools</p>
						</a>
					</li>
					<li>
						<a href="./typography.html">
							<i className="material-icons">info_outline</i>
							<p>Need help?</p>
						</a>
					</li>
					<li>
						<a href="./icons.html">
							<i className="material-icons">bubble_chart</i>
							<p>Meet with Recruiters</p>
						</a>
					</li>
					<li>
						<a href="./maps.html">
							<i className="material-icons">location_on</i>
							<p>Maps</p>
						</a>
					</li>
					<li>
						<a href="./notifications.html">
							<i className="material-icons text-gray">notifications</i>
							<p>Notifications</p>
						</a>
					</li>
					<li className="active-pro">
						<a href="upgrade.html">
							<i className="material-icons">unarchive</i>
							<p>Upgrade to PRO</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
