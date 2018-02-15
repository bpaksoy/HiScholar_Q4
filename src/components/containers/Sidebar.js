import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';


class Sidebar extends Component{
	constructor(props){
     super(props);
     this.state = {

     };
   }

  getSavedUniversities(event){
    if(event){
			event.preventDefault();
       axios.get("/api/universities/user/savedschools")
       .then(result => {
  			  console.log("saved schools are ", result);
         this.props.savedUniversitiesReceived(result.data) // this is an array of universities
       })["catch"](err => {
  		 console.log("we have not got the data!");
  		 });
   }
  }

	closeSavedUniversities(event){
    if(event){
      event.preventDefault();
      this.setState({
        clicked:!this.state.clicked
      })
    }
  }

  render(){
		//console.log("isClicked", this.state.clicked)
		return (
			<div className="sidebar" data-color="purple" data-image="/img/sidebar-1.jpg">
				<div className="logo">
					<img className="img" src="/img/Logo.png" />
				</div>
				<div className="sidebar-wrapper">
					<ul className="nav">
						<li className="active">
							<a href="/">
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
							<a onClick={this.getSavedUniversities.bind(this)} href="/">
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
		);
  }
}

const stateToProps = (state) => {
	return {
    university: state.university
	}
}

const dispatchToProps = (dispatch) => {
	return {
     savedUniversitiesReceived: (universities) => dispatch(actions.savedUniversitiesReceived(universities))
	 }
 }

export default connect(stateToProps, dispatchToProps)(Sidebar)
