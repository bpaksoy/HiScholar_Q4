import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Link } from "react-router-dom";
import axios from "axios";

class Newsfeed extends Component {
	constructor(props){
		super(props);
		this.state = {
      data: []
		}
	}


 componentDidMount() {
  axios.get("/newsfeed/tweets")
	.then(result => {
		console.log("data", result.data)
		const data = result.data[0].data.statuses[0]
    // const text = data.text;
		// const imgURL = (data.extended_entities) ? data.extended_entities.media[0].media_url : data.user.profile_banner_url;
		// console.log("imgURL", imgURL);
		// const name = data.user.name;
		this.setState({
			data: result.data
		})
	 })
}



	render() {
		const currentUser = this.props.user.currentUser; // can be null
    const data = this.state.data;
	  const	stream = data.map((result, i) => {
		  const tweet = result.data.statuses[0].text;
		  const name = result.data.statuses[0].user.name
			//console.log("result is ", result)
		  const imgURL = (result.data.statuses[0].extended_entities) ? result.data.statuses[0].extended_entities.media[0].media_url : result.data.statuses[0].user.profile_banner_url;
			 return(
				<div key={i} style={{border:"1px solid black", borderRadius:"3px", padding:"5px"}}>
					<h3>{name}</h3>
					<img style={style.img} src={imgURL} alt="media"/>
					<h4>{tweet}</h4>
				</div>
			  );
		})


		console.log("currentUser", currentUser);
			return(
		    <div>
					<div className="col-md-8">
						 <div className="jumbotron" style={{backgroundColor:"white"}}>
              {stream}
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
