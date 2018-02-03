import React, { Component } from 'react'
export default (props) => {

	return (
	<div>
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <h4 style={{textTransform:'capitalize'}} className="card-title">Personal Statement</h4>
              <div className="label-floating">
                <textarea name="personal_statement" onChange={props.handleStatement.bind(this, "personal_statement")} style={style.textarea} className="form-control" rows="15"></textarea>
              </div>
            </div>
          </div>
         </div>
       </div>
			 <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
    </div>
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
