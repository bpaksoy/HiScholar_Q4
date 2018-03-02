import React, { Component } from 'react';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const getImageStyle = url => ({
  backgroundSize: 'cover',
  backgroundImage: 'url('+url+')',
  height: '230px',
  width: '100%',
  display: 'block',
  borderRadius: '4px',
  backgroundPosition: 'center center'
});
export default (props) => {

  const { shouldShowSavedUniversities = false, savedUniversities = [] } = props;

  let saved_universities_markup = savedUniversities.map((university, index) => {

    let { school_name = '', description = '', ranking = '', tuition = '', acceptance_rate = '', _id = '', imgURL = '' } = university;

    return(
      <div key={_id} className='col-md-6' style={style.card}>
        <i onClick={props.deleteSchool.bind(this, _id)} style={{size: "20"}} style={style.closeButton} className="fa fa-window-close pull-right"></i>
        <div className="thumbnail">
            <div style={getImageStyle(imgURL)} className="card-img-top"></div>
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
  img: {
    width: '100%'
  },
  closeButton: {
    position: 'absolute',
    top: '-5px',
    fontSize: '20px',
    right: '12px',
    background: 'white'
  }
}

  // <div style={style.card} className="row">
  //</div>
