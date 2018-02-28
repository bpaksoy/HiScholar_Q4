import React, { Component } from 'react';
import { Footer, ProfileCard, ProfileForm } from '../presentation';
import { Profile} from '../containers';
import { Newsfeed } from '../pages';
import Nav from '../containers/Nav';
import Sidebar from '../containers/Sidebar';

import { Route, Link } from "react-router-dom";


class Dashboard extends Component {

	render() {

		return (
			<div className="wrapper">
				<Sidebar />
				<div className="main-panel">
					<Nav/>
					 <div className="content">
						<div className="container-fluid">
                 <div>
                   <Route exact path="/" component={Profile}></Route>
                   <Route path="/newsfeed" component={Newsfeed}></Route>
                 </div>
						</div>
					 </div>
					 <Footer/>
				</div>
			</div>
		)
	}
}

export default Dashboard
