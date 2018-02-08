import React, { Component } from 'react';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default (props) => {

 let savedUniversities = (props.savedUniversities.length)? props.savedUniversities : [];
 console.log("saved universities in the component", savedUniversities);

  savedUniversities = savedUniversities.map((university, index) => {
     console.log("university", university)
     let universityName = Object.keys(university);
     console.log("universityName", universityName);
    return(
        <div key={index} className="col-sm-6 col-md-6">
          <div className="thumbnail">
            <img style={style.img} className="card-img-top" src={university[universityName].imgURL} alt="university_img"/>
            <div className="caption">
              <h3>{university[universityName].school_name}</h3>
              <p>{university[universityName].description}</p>
              <small className="text-muted">Ranked #{university[universityName].ranking} among universities in the US.</small><br/>
              <small className="text-muted">Annual tuition $ {numberWithCommas(university[universityName].tuition)}</small><br/>
              <small className="text-muted">Acceptance rate: {university[universityName].acceptance_rate}%</small>
            </div>
          </div>
        </div>
    );
  })


	return (
	  <div>
     {(savedUniversities.length)?
      <div>{savedUniversities}</div> : null
     }
	  </div>
	)
}

const style = {
  card : {
    display: "-webkit-box",
    display: "-webkit-flex",
    display: "ms-flexbox",
    display: "flex",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    WebkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    width: "100%"
  },
  img : {
    WebkitBoxFlex: "0",
    WebkitFlex: "0 0 auto",
    msFlex: "0 0 auto",
    flex: "0 0 auto"
  }
}

  // <div style={style.card} className="row">
  //</div>
