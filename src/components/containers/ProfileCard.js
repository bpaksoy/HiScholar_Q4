import React, { Component } from 'react'
const keys = require("../../../config/keys");
//import sha1 from "sha1";
import { connect } from 'react-redux';
import actions from '../../actions';
import axios from "axios";
import superagent from 'superagent';

class ProfileCard extends Component {
  constructor(props){
		super(props);
		this.state = {
			user: props.user
		}
	}

	componentDidMount(){
		superagent.get('/auth/currentuser')
			.query(null)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if (err)
					return
				const payload = response.body
				const user = payload.user // this is the currently logged-in user
				const imgURL = user.thumbnail;
				this.props.profilePicUrlReceived(imgURL);
			})
	}


  uploadFile(){

		const files = document.getElementById('file-input').files;
    const file = files[0];
		//console.log("file:", file);
    const imgPreview = document.getElementById("img-preview");

		const cloudName = keys.cloudinary.cloudName;
    //const apiSecret = keys.cloudinary.apiSecret;
		const uploadPreset = keys.cloudinary.uploadPreset;
		//console.log("uploadPreset", uploadPreset)
		//const apiKey = keys.cloudinary.apiKey;

		const timestamp = Date.now()/1000;
		var url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

	  var fd = new FormData();
		fd.append("file", file);
		fd.append("upload_preset", uploadPreset);
		fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
		//console.log("fd", fd)

	  const config = {
	    headers: { "X-Requested-With": "XMLHttpRequest" },
	  };

	  axios.post(url, fd, config)
	    .then(function (res) {
				 //console.log(res.data)
				const imgURL = res.data.secure_url;
        imgPreview.src = imgURL;
				axios.put("/dashboard/profile_picture", { thumbnail : imgURL }).then(function (result){
					  console.log("result is ", result);
					})["catch"](function (err) {
				 console.log("we have not got the data!");
				 });

			 })
	     .catch(function (err) {
				 console.log("err", err)
			 })

	}

 render(){
	 const user = this.props.user.currentUser // can be null
 	 const fullName = (user == null) ? '' : user.firstName + ' ' + user.lastName;
	 const thumbnail = (user.thumbnail)? user.thumbnail : "";
   //console.log("thumbnail: ", thumbnail)
 	return (
		<div className="card card-profile">
			<div className="card-avatar">
			 {(thumbnail)?
				  <img id="img-preview" className="img" src={thumbnail} /> :
					<img id="img-preview" className="img" src="/img/faces/marc.jpg" />
			 }
			</div>
        <label className="btn btn-primary btn-round" name="file-upload">
				 <input id="file-input" onChange={this.uploadFile.bind(this)} type="file" accept="image/*" style={{display:"none"}}/>Upload Photo
        </label>
			<div className="content">
				<h6 className="category text-gray">CEO / Co-Founder</h6>
				<h4 style={{textTransform:'capitalize'}} className="card-title">{ fullName }</h4>
				<a href="#pablo" className="btn btn-primary btn-round">Follow</a>
			</div>
		</div>
	);
 }
}



const stateToProps = (state) => {
	return {
		user: state.user,
		picture_url: state.picture_url
	}
}

const dispatchToProps = (dispatch) => {
	return {
	  profilePicUrlReceived: (url) => dispatch(actions.profilePicUrlReceived(url))
	}
 }

export default connect(stateToProps, dispatchToProps)(ProfileCard);


// .then(() => {
// 	axios.get("/dashboard/currentuser")
// 	.then(user => {
// 		imgPreview.src = user.thumbnail;
// 	})
// })
