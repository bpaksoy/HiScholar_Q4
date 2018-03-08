import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Link } from "react-router-dom";
import scrolltoElement from 'scrollto-element'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedUniversity: ""
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleChange(event) {
    if (event) {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      })
    }
  }
  handleScroll() {
  	console.log('handleScroll');
  	scrolltoElement({
  		element: document.querySelector('.universities_section'),
		  offset: 100, // default is 0
		  bezier: [0.19, 1, 0.22, 1], // default is [0.19, 1, 0.22, 1]
		  duration: 1000, // default is 100
  	})
  }
  handleSubmit(event) {
    let search = this.refs.search;
    if (event) {
      event.preventDefault();
      const searchedUniversity = this.state.searchedUniversity.trim();
      this.props.searchedUniversityReceived(searchedUniversity);
      search.value = "";
      // console.log("searchedUniversity in the Nav", this.state.searchedUniversity);

      const url = "/api/universities/name/" + searchedUniversity;
      return axios.get(url)
        .then(result => {
          const data = result.data
          this.props.selectedUniversitiesReceived(data);
          this.handleScroll();
        })
        .catch(err => {
          console.log("we have not got the data!");
        });
    }
  }


  render() {
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
                <Link to="/newsfeed" >
  								Newsfeed
                </Link>
							</li>
							<li>
								<a href="/auth/logout">Log Out</a>
							</li>
						</ul>
						<form className="navbar-form navbar-right" role="search">
								<div className="form-group  is-empty">
										<input ref="search" onChange={this.handleChange.bind(this)} name="searchedUniversity" value={this.state.value} type="text" className="form-control" placeholder="Search schools"/>
										<span className="material-input"></span>
								</div>
								<button onClick={this.handleSubmit.bind(this)} className="btn btn-white btn-round btn-just-icon">
									 <i className="material-icons">search</i>
									 <div className="ripple-container"></div>
								</button>
						 </form>
					</div>
				</div>
			</nav>
		)
	}
}

const stateToProps = (state) => {
	return {
		university: state.university
	}
}

const dispatchToProps = (dispatch) => {
  console.log("date is ", new Date().toJSON().slice(0,10));


	return {
		searchedUniversityReceived: (university) => dispatch(actions.searchedUniversityReceived(university)),
		selectedUniversitiesReceived: (universities) => dispatch(actions.selectedUniversitiesReceived(universities))
	 }
 }

export default connect(stateToProps, dispatchToProps)(Nav);
