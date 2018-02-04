import React, { Component } from 'react'

export default (props) => {
	const user =  props.user; // can be null
	//console.log("user in the personal_statement form", user);
	const personal_statement = (user)? user.personal_statement : "";
  //console.log("personal statement in the component", personal_statement)
return (
	<div>
	 <form>
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <h4 style={{textTransform:'capitalize'}} className="card-title">Personal Statement</h4>
              <div className="label-floating">
							 { (user)? <div><textarea name="personal_statement" defaultValue={user.personal_statement} onChange={props.handleStatement.bind(this)} style={style.textarea} className="form-control" rows="15"></textarea></div>
							 : null
						   }
              </div>
            </div>
          </div>
         </div>
       </div>
			 <button onClick={props.submitStatement.bind(this)} className="btn btn-primary pull-right">Update Profile</button>
     </div>
		</form>
	</div>
	)
}

const style = {
	textarea: {
		background: '#fffffa',
		border: '1px solid #ddd',
		padding: 16
	}
}

//defaultValue={user.personal.personal_statement}
//<div><textarea name="personal_statement" onChange={props.handleStatement.bind(this)} style={style.textarea} className="form-control" rows="15"></textarea></div>
