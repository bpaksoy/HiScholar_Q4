import React, { Component } from 'react';
import Footer from 'components/presentation/Footer';
import Profile from 'components/containers/Profile';
import Newsfeed from 'components/pages/Newsfeed';
import Nav from 'components/containers/Nav';
import Sidebar from 'components/containers/Sidebar';

import { Route, Link } from "react-router-dom";

class Dashboard extends Component {

	render() {
		return (
			<div className="wrapper">
				<Sidebar />
        <Router history={hashHistory}>
  				<div className="main-panel">
			        <Nav />
              <div className="content">
                <div className="container-fluid">
                  <div>
                    <Route exact path="/" component={Profile}></Route>
                    <Route path="/newsfeed" component={Newsfeed}></Route>
                  </div>
                </div>
              </div>
					    <Footer />
  				</div>
        </Router>
			</div>
		)
	}
}

export default Dashboard
