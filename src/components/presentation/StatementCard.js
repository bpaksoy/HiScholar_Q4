import React, { Component } from 'react'

export default (props) => {
	// const user =  props.user; // can be null
	// console.log("user in the personal_statement form", user);
	// const personal_statement = (user)? user.personal_statement : "";
  // console.log("personal statement in the component", personal_statement)
return (
	<div>
  	<form>
       <div className="card">
         <img className="card-img-top" src="/img/purple.jpg" alt="Purple"/>
         <div className="card-block">
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
         </div>
       </div>
  	</form>
	</div>
	)
}
