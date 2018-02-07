import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';


class Nav extends Component {

 constructor(props){
	 super(props);
	 this.state = {
		 selectedUniversity: "",
		 getUniversity: props.getUniversity
	 }
 }

 handleChange(event){
	 if(event){
		 event.preventDefault();
     const name = event.target.name;
		 const value = event.target.value;
		 this.setState({
			 [name]: value
		 })
	 }
 }

 handleSubmit(event){
	 let search = this.refs.search;
	 if(event){
		 event.preventDefault();
		 const selectedUniversity = this.state.selectedUniversity.toLowerCase().trim();
     this.props.universityReceived(selectedUniversity)
		 search.value = "";
		 console.log("selectedUniversity in the Nav", this.state.selectedUniversity);
	 }
 }

 render(){
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
							<a href="/auth/logout">Log Out</a>
						</li>
					</ul>
					<form className="navbar-form navbar-right" role="search">
							<div className="form-group  is-empty">
									<input ref="search" onChange={this.handleChange.bind(this)} name="selectedUniversity" value={this.state.value} type="text" className="form-control" placeholder="Search schools"/>
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
	return {
		universityReceived: (university) => dispatch(actions.universityReceived(university))
	 }
 }

export default connect(stateToProps, dispatchToProps)(Nav);
