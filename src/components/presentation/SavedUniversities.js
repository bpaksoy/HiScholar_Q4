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

    const { _id = '', school = {}, admission = {}, location = {} } = university;

    return(
      <div key={_id} className='col-md-6' style={style.card}>
        <i onClick={props.deleteSchool.bind(this, _id)} style={{size: "20"}} style={style.closeButton} className="fa fa-window-close pull-right"></i>
        <div className="thumbnail">
          <div style={getImageStyle(school.img)} className="card-img-top"></div>
          <div className="caption">
            <h3 style={style.ellipsis}>{ school.name }</h3>
              <p>{ school.description }</p>
                <small className="text-muted">Student faculty ratio : {school.studentFacultyRatio}</small><br/>
                <small className="text-muted">{location.city},{location.state}</small><br/>
                <small className="text-muted">Acceptance rate : { admission.acceptanceRate }%</small><br/>
                <small className="text-muted">Out State tution fees : { school.outstateTuition }%</small><br/>
                <small className="text-muted">Percent of Students on Fin aid : { admission.percentOnFA }%</small>
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
  },
  ellipsis: {
    width: '250px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}

  // <div style={style.card} className="row">
  //</div>
