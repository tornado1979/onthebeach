import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const Block = (props) => {
  const {
    card,
    pluralData
  } = props

  return (
    <div className="card">
      <div className="row">
        <div className="left-colmn" style={{width: '100%'}}>
          <img src={props.img} style={{margin:'auto', display:'block'}}/>
        </div>
      </div>
    </div>
  )
}

Block.propTypes = {
  card: PropTypes.shape({
    "id": PropTypes.number,
    "hotel_name": PropTypes.string,
    "location": PropTypes.string,
    "star_rating": 5,
    "image": PropTypes.string,
    "guests": PropTypes.shape({
      "adults": PropTypes.number,
      "children": PropTypes.number,
      "infants": PropTypes.number,
    }),
    "departureDate":PropTypes.string,
    "days": PropTypes.number,
    "departAirport": PropTypes.string,
    "overview": PropTypes.string,
    "price": PropTypes.number,
  })
};


export default Block
