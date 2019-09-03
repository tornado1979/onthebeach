import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import Image from './Image';
import Rating from './Rating';
import Label from './Label';
import Drawer from './Drawer';

import { getPlural } from '../selectors';
import { concatGuests } from '../helpers/concatGuests';

const Card = (props) => {
  const {
    card,
    pluralData
  } = props

  return (
    <div className="card">
      <div className="row">
        <div className="left-colmn">
          <Image imgUrl={card.image}/>
        </div>
        <div className="right-column">
          <Label text={card.hotel_name} type='title' />
          <Label text={card.location} type='sub-title' />
          <Rating rating={card.star_rating}/>
          <Label text={concatGuests(pluralData, card.guests)} type='default'/>
          <Label text={`${card.dateStart} for ${card.days} days`} type='default'/>
          <Label text={`departing from ${card.departFrom}`} type='default'/>
          <Button textLine2={card.price}/>
        </div>
      </div>
      <div className="row" style={{position: 'relative', top:'-37px'}}>
        <Drawer />
      </div>
    </div>
  )
}

Card.propTypes = {
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
    "dateStart":PropTypes.string,
    "days": PropTypes.number,
    "departFrom": PropTypes.string,
    "overview": PropTypes.string,
    "price": PropTypes.number,
  })
};

const mapStateToProps = (state) => {
  return {
    pluralData: getPlural(state),
  }
}

export default connect(mapStateToProps)(Card)
