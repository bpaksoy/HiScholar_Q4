import React, { Component } from 'react'


export default class ProfileInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {

      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  isFormValid({ city = '', country = ''}) {
    return (
      city.length != 0 && country.length != 0
    )
  }

  handleChange(e) {
    const { user = {} } = this.props;
    const { name = '', value = '' } = e.target;
    const updated_user = {
      ...user,
      personal: {
        ...user.personal,
        ...this.state.user.personal,
        [name]: value
      }
    }
    const isDisabled = !this.isFormValid(updated_user.personal);
    this.setState({
      user: updated_user,
      isDisabled
    })
  }

  submitInfo(e) {
    e.preventDefault();
    const { user = {} } = this.state;
    this.props.updateUser(user);
  }

  render() {

    const { isDisabled = false } = this.state;
    const { user = {} } = this.props;
    const { personal = {} } = user;
    const { city = '', state = '', country = '', zip_code = '', gpa = '', toefl = '', act = '', sat = '' } = personal;

    return (
      <div>
        <div className="card">
          <div className="card-header" data-background-color="purple">
            <h4 className="title">Personal Info</h4>
            <p className="category">Complete your profile</p>
          </div>
          <div className="card-content">
            <form onChange={this.handleChange.bind(this)} >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group label-floating">
                    <label className="control-label">First Name</label>
                    <input name="firstName" style={{textTransform:"capitalize"}}  defaultValue={user.firstName} type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group label-floating">
                    <label className="control-label">Last Name</label>
                    <input name="lastName" style={{textTransform:"capitalize"}} defaultValue={user.lastName} type="text" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group required label-floating">
                    <label className="control-label"><i className="fa fa-asterisk" style={{fontSize:6,color:"red"}}></i>City</label>
                      <input name="city" defaultValue={city} className="form-control" type="text"/>
                  </div>
                </div>
                  <div className="col-md-3">
                    <div className="form-group label-floating">
                      <label className="control-label">State</label>
                      <input name="state" defaultValue={state} type="text" className="form-control" />
                    </div>
                  </div>
                <div className="col-md-3">
                  <div className="form-group required label-floating">
                    <label className="control-label"><i className="fa fa-asterisk" style={{fontSize:6,color:"red"}}></i>Country</label>
                      <input name="country" className="form-control" defaultValue={country} type="text"/>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group label-floating">
                    <label className="control-label">Zip Code</label>
                    <input name="zip_code" className="form-control" defaultValue={zip_code} type="text"  />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group label-floating">
                    <label className="control-label">GPA</label>
                    <input name="gpa" defaultValue={gpa} type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group label-floating">
                    <label className="control-label">TOEFL</label>
                    <input name="toefl" defaultValue={toefl} type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group label-floating">
                    <label className="control-label">ACT</label>
                    <input name="act" defaultValue={act} type="email" className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group label-floating">
                    <label className="control-label">SAT</label>
                    <input name="sat" defaultValue={sat} type="email" className="form-control" />
                  </div>
                </div>
              </div>
              <button onClick={this.submitInfo} type="submit" disabled={isDisabled} className="btn btn-primary pull-right">Update Profile</button>
              <div className="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
