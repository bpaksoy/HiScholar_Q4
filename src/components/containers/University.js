import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import  Nav  from './Nav';
import axios from "axios";
import superagent from 'superagent';

class University extends Component {

 constructor(props){
    super(props);

  }

 componentDidMount() {
 	superagent.get('/api/universities')
 		.query(null)
 		.set('Accept', 'application/json')
 		.end((err, response) => {
 			if (err)
 				return
 			//const payload = response.body
      console.log("university array", payload);
      this.setState({
        universityArray: payload
      })
    //  console.log("university array after payload", this.state.universityArray);
 		})
  }




  render(){
    const selectedUniversity = (this.props.university.selectedUniversity)? this.props.university.selectedUniversity : ""; //can be null
    console.log("selectedUniversity in the university component", selectedUniversity);
    //const universityArray = (this.state.universityArray)? this.state.universityArray : [];
    //const collegeMatch = (universityArray.length) ? universityArray.filter(university => university.school_name.toLowerCase().includes(selectedUniversity)) : "";
    //console.log("collegeMatch", collegeMatch)

    return(
      <div>
        <h3>This is University component!</h3>
        <div className="card" style={{width: "25rem", margin: "10"}}>
          <img className="card-img-top" src="/img/Logo.png" alt="Card image cap"/>
          <div className="card-block">
            <p style={pStyle} className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </div>
        </div>
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

const pStyle ={
  padding: "5px",
  margin: "5px"
};

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
