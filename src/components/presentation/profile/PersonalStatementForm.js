import React, { Component } from 'react'

export default class PersonalStatementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitStatement = this.submitStatement.bind(this);
  }

  isFormValid({ personal_statement = '' }) {
    return !!personal_statement;
  }

  handleChange(e) {
    e.preventDefault();
    const { user = {} } = this.props;
    const { name = '', value = '' } = e.target;
    const updated_user = {
      ...user,
      [name]: value
    }
    const isDisabled = !this.isFormValid(updated_user);
    this.setState({
      user: updated_user,
      isDisabled
    })
  }

  submitStatement(e) {
    e.preventDefault();
    const { user = {} } = this.state;
    const updated_user = {
      ...this.props.user,
      ...user,
    }
    this.props.updateUser(updated_user);
  }

  render() {
    const { isDisabled = true } = this.state;
    const { user = {} } =  this.props;
    const { personal_statement = "" } = user;

    return (
      <div>
        <form>
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <h4 style={{textTransform:'capitalize'}} className="card-title">
                      Personal Statement
                    </h4>
                    <div className="label-floating">
                      <textarea
                        name="personal_statement"
                        defaultValue={personal_statement}
                        onChange={this.handleChange}
                        style={style.textarea}
                        className="form-control" rows="15"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <button disabled={isDisabled} onClick={this.submitStatement} className="btn btn-primary pull-right" style={style.submitButton}>
              Update Statement
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const style = {
  textarea: {
    background: '#fffffa',
    border: '1px solid #ddd',
    padding: 16
  },
  submitButton: {
    margin: '0 20px 20px'
  }
}

