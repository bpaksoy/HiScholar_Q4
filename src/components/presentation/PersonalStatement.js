import React, { Component } from 'react'

export default (props) => {
	const user =  props.user;
	console.log("user in the personal_statement form", user);
	const personal = (props.personal);

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
							 { (user && personal)? <textarea name="personal_statement" defaultValue={personal.personal_statement} onChange={props.handleStatement.bind(this)} style={style.textarea} className="form-control" rows="15"></textarea> : <textarea name="personal_statement" value={props.value} onChange={props.handleStatement.bind(this)} style={style.textarea} className="form-control" rows="15"></textarea>}
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
