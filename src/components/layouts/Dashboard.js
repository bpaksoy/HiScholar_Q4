import React, { Component } from 'react'
import { Footer, ProfileCard, ProfileForm } from '../presentation'
import { Profile} from '../containers'
import Nav from '../containers/Nav'
import Sidebar from '../containers/Sidebar'

class Dashboard extends Component {
  
	render() {

		return (
			<div className="wrapper">
				<Sidebar />

				<div className="main-panel">
					<Nav/>

					<div className="content">
						<div className="container-fluid">
							<Profile/>
						</div>

					</div>

					<Footer/>
				</div>
			</div>
		)
	}
}

export default Dashboard
