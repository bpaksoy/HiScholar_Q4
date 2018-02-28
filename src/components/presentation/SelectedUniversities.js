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
  let selected_universities_markup = selectedUniversities.map((university, index, array) => {
    const is_already_saved = savedUniversities.some(saved_university => {
      return saved_university._id == university._id;
    })
    const { school_name = '', description = '', ranking = '', tuition = '', _id = '', imgURL = '', acceptance_rate = '' } = university;
    const should_have_row = index%2;
    return(
      <div key={_id} className='col-md-6' style={style.card}>
        <i onClick={props.removeUniversityFromSelected.bind(this, _id)} style={style.closeButton} className="fa fa-window-close pull-right"></i>
        <div className="thumbnail">
          <div style={getImageStyle(imgURL)} className="card-img-top"></div>
          <div className="caption">
            <h3>{ school_name }</h3>
            <p>{ description }</p>
              <small className="text-muted">Ranked #{ ranking } among universities in the US.</small><br/>
              <small className="text-muted">Annual tuition $ {numberWithCommas( tuition )}</small><br/>
              <small className="text-muted">Acceptance rate: { acceptance_rate }%</small>
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
  }
}
