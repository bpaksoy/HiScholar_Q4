import React, { Component } from 'react'
import { Sidebar, Nav, Footer, ProfileCard, ProfileForm } from '../presentation'
import { Profile } from '../containers'

class Dashboard extends Component {

	render() {
		return (
			<div className="wrapper">
				<Sidebar />

				<div className="main-panel">
					<Nav />

					<div className="content">
						<div className="container-fluid">
							<Profile />
						</div>

					</div>

					<Footer />
				</div>
			</div>
		)
	}
}

export default Dashboard