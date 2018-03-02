import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Link } from "react-router-dom";
import axios from "axios";

class Newsfeed extends Component {
	constructor(props){
		super(props);
		this.state = {
      tweet: "",
			imgURL: "",
			name: ""
		}
	}


 componentDidMount() {
  axios.get("/newsfeed/tweets")
	.then(result => {
		console.log("data", result.data[0])
    const text = result.data[0].text;
		const imgURL = (result.data[0].extended_entities) ? result.data[0].extended_entities.media[0].media_url : result.data[0].user.profile_banner_url;
		console.log("imgURL", imgURL);
		const name = result.data[0].user.name;
		this.setState({
      tweet: text,
			imgURL:imgURL,
      name: name
		})
	})
}


	render() {
		const currentUser = this.props.user.currentUser; // can be null
		console.log("currentUser", currentUser);
			return(
		    <div>
					<div className="col-md-8">
						 <div className="jumbotron" style={{backgroundColor:"white"}}>
						  <div style={{border:"1px solid black", borderRadius:"3px", padding:"5px"}}>
							  <h3>{this.state.name}</h3>
							  <img style={style.img} src={this.state.imgURL} alt="media"/>
								<h4>{this.state.tweet}</h4>
							</div>
						</div>
				  </div>
					<div className="col-md-4">
				</div>
			</div>
		 	);
	 	}

}

const stateToProps = (state) => {
	return {
		user: state.user,

	}
}

const dispatchToProps = (dispatch) => {
	return {

	}
 }

export default connect(stateToProps, dispatchToProps)(Newsfeed);



const style ={
	"img": {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "5px",
    width: "100%"
   }
}
