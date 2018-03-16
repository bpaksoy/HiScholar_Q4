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
  const { selectedUniversities = [], savedUniversities = [] } = props;
  console.log('selectedUniversities', selectedUniversities)
  let selected_universities_markup = selectedUniversities.map((university, index, array) => {
    const is_already_saved = savedUniversities.some(saved_university => {
      return saved_university._id == university._id;
    })
    const { _id = '', school = {}, admission = {}, location = {} } = university;
    const should_have_row = index%2;
    return(
      <div key={_id} className='col-md-6' style={style.card}>
        <i onClick={props.removeUniversityFromSelected.bind(this, _id)} style={style.closeButton} className="fa fa-window-close pull-right"></i>
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
            {(is_already_saved)?
              <button onClick={props.deleteSchool.bind(this, _id)} className="btn btn-primary" role="button"> Saved <i className="fa fa-heart"></i></button>:
              <button onClick={props.saveSchool.bind(this, university)} className="btn btn-primary" role="button"> Save </button>}
            </p>
          </div>
         </div>
       </div>
    );
  })
  const all_cards = [];
  selected_universities_markup.forEach((university_markup, index, array) => {
    const arraylen = array.length;
    all_cards.push
  })
  return (
    <div > { selected_universities_markup } </div>
  )
}

const style = {
  card: {
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
