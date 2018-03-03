import React, { Component } from 'react';

export default class PersonalStatementCard extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { updateStatement } = this.props
    updateStatement();
  }

  render() {
    const { user = {} } =  this.props; // can be null
    const { personal_statement = "" } = user;

    return (
      <div>
        <form>
           <div className="card">
            <img style={{boxSize: 200}} style={{height: 200}} className="card-img-top" src="/img/purple.jpeg" alt="Purple"/>
            <div style={{padding: 10}} className="card-block">
              <h4 style={{textTransform:'capitalize'}} className="card-title">Personal Statement</h4>
              <p className="card-text">{personal_statement}</p>
            </div>
            <button onClick={this.handleChange.bind(this)} style={{marginRight: 10}} className="btn btn-primary pull-right">
              Update Statement
            </button>
           </div>
        </form>
      </div>
    )
  }
}
