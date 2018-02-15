import React, { Component } from 'react'
const keys = require("../../../config/keys");
import sha1 from "sha1";
import axios from "axios";
import Dropzone from 'react-dropzone';

class ProfileCard extends Component {
  constructor(props){
		super(props);
		this.state = {
			user: props.user
		}
	}


  uploadFile(){

		const files = document.getElementById('file-input').files;
    const file = files[0];
		console.log("file:", file);
		const cloudName = keys.cloudinary.cloudName;
		const imgPreview = document.getElementById("img-preview");
		//console.log("url is ", url, "imgPreview", imgPreview)
		const uploadPreset = keys.cloudinary.uploadPreset;
		//console.log("uploadPreset", uploadPreset)
		const apiKey = keys.cloudinary.apiKey;
		var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
	  var fd = new FormData();
	  fd.append("upload_preset", uploadPreset);
	  fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
	  fd.append("file", file);
	  const config = {
	    headers: { "X-Requested-With": "XMLHttpRequest" },
	  };
	  axios.post(url, fd, config)
	     .then(function (res) {
				 console.log(res.data)
				 imgPreview.src = res.data.secure_url;
			 })
	     .catch(function (err) {
				 console.log("err", err)
			 })

	}

 render(){
	 const user = this.state.user // can be null
 	 const fullName = (user == null) ? '' : user.firstName + ' ' + user.lastName

 	return (
		<div className="card card-profile">
			<div className="card-avatar">
				<a href="/">
					<img id="img-preview" className="img" src="/img/faces/marc.jpg" />
				</a>
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


export default ProfileCard;



// <label className="btn btn-primary btn-round" name="file-upload">// </label>
