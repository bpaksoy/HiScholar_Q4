import React, { Component } from 'react';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default (props) => {

  const { shouldShowSavedUniversities = false, savedUniversities = [] } = props;

  let saved_universities_markup = savedUniversities.map((university, index) => {

    let { school_name = '', description = '', ranking = '', tuition = '', acceptance_rate = '', _id = '', imgURL = '' } = university;

    return(
      <div key={_id} className='col-md-6' style={style.card}>
        <i onClick={props.deleteSchool.bind(this, _id)} style={{size: "20"}} style={style.closeButton} className="fa fa-window-close pull-right"></i>
        <div className="thumbnail">
          <img style={style.img} className="card-img-top" src={ imgURL } alt="university_img"/>
            <div className="caption">
            <h3>{ school_name }</h3>
              <p>{ description }</p>
                <small className="text-muted">Ranked #{ ranking } among universities in the US.</small><br/>
                <small className="text-muted">Annual tuition $ {numberWithCommas( tuition )}</small><br/>
                <small className="text-muted">Acceptance rate: { acceptance_rate }%</small>
              <p>
                <button onClick={props.deleteSchool.bind(this, _id)} className="btn btn-primary" role="button"> Saved <i className="fa fa-heart"></i></button>
              </p>
           </div>
         </div>
       </div>
    );
  });

  saved_universities_markup = savedUniversities.length ? saved_universities_markup : 'No Saved Univesities.';

	return (
	  <div>
      <div>
        <div style={style.card}>{saved_universities_markup}</div>
      </div>
	  </div>
	)
}

const style = {
  card : {
    minHeight: '550px',
  },
  img : {
    WebkitBoxFlex: "0",
    WebkitFlex: "0 0 auto",
    msFlex: "0 0 auto",
    flex: "0 0 auto"
  },
  closeButton: {
    position: 'absolute',
    top: '-3px',
    right: '11px'
  }
}

  // <div style={style.card} className="row">
  //</div>
