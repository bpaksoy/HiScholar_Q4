import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import  Nav  from './Nav';
import axios from "axios";
import superagent from 'superagent';

class University extends Component {

 constructor(props){
    super(props);
    this.state = {

    };

  }



  render(){
  let selectedUniversities = (this.props.university.selectedUniversities.length) ? this.props.university.selectedUniversities : [];
  console.log("selectedUniversities in the University component", selectedUniversities)
  selectedUniversities = selectedUniversities.map((university, index) => {
    return(
      <div key={index} className="row">
        <div className="col-sm-8 col-md-6">
          <div className="thumbnail">
            <img src={university.imgURL} alt="university_img"/>
            <div className="caption">
              <h3>{university.school_name}</h3>
              <p>{university.description}</p>
              <small className="text-muted">Tuition $ {university.tuition}</small><br/>
              <small className="text-muted">Acceptance rate: {university.acceptance_rate}%</small>
              <p>
                  <a href="#" className="btn btn-primary" role="button">Save</a>
             </p>
            </div>
          </div>
        </div>
     </div>
    );
  })

    return(
      <div>
       {(selectedUniversities.length)?
        <div>
          <h3>This is University component!</h3>
          {selectedUniversities}
        </div>
       : null }
      </div>
    );
  }


}

const stateToProps = (state) => {
	return {
    university: state.university
	}
}

const dispatchToProps = (dispatch) => {
	return {
	}
 }

export default connect(stateToProps, dispatchToProps)(University);

const divStyle ={
  padding: "5px 5px 5px 5px",
  margin: "10px 10px 10px 10px"
};



// <div style={divStyle} key={index} className="card" style={{width: "25rem", margin: "10"}}>
//    <img className="card-img-top" src={university.imgURL} alt="Card image cap"/>
//    <div  className="card-block">
//      <span><a href="#"><b>{university.school_name}</b></a></span>
//      <p className="card-text">{university.description}</p>
//      <small className="text-muted">Tuition $ {university.tuition}</small><br/>
//      <small className="text-muted">Acceptance rate: {university.acceptance_rate}%</small>
//    </div>
// </div>
// <div className="card" style={{width: "30rem"}}>
//   <img className="card-img-top" src="/img/Logo.png" alt="Card image cap"/>
//   <div className="card-block" style={{marginLeft: "10"}}>
//     <h4 className="card-title">Card title</h4>
//     <p className="card-text" >Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//   </div>
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">Cras justo odio</li>
//     <li className="list-group-item">Dapibus ac facilisis in</li>
//     <li className="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div className="card-block">
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>
// </div>

// <div className="card" style={{width: "25rem", margin: "10"}}>
//    <img className="card-img-top" src="" alt="Card image cap"/>
//    <div className="card-block">
//      <p style={pStyle} className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
//    </div>
//  </div>
// </div>
