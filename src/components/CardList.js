import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardList = (props) => {
  return (
    <div className="card-list">
     {props.cards.map((card, idx) => {
      return (<Card card={card} key={card.id} />)
    })}
    </div>
  )
}


CardList.defaultProps  =
{cards: [
  {
    id: 1,
    hotel_name: "Iberostar Grand Salome",
    location: "costa adeje, Tenerife",
    star_rating: 5,
    image:"../assets/images/image_01.png",
    adults: 2,
    children: 2,
    infants: 1,
    dateStart: "3rd July 2019",
    days: 7,
    departFrom: "East Midlands",
    overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..",
    price:1136.50
  }
]}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    hotel_name: PropTypes.string,
    location: PropTypes.string,
    star_rating: PropTypes.number,
    image:  PropTypes.string,
    adults: PropTypes.number,
    children: PropTypes.number,
    infants: PropTypes.number,
    dateStart:  PropTypes.string,
    days: PropTypes.number,
    dateFrom:  PropTypes.string,
    overview:  PropTypes.string,
    price:  PropTypes.boolean,
  }))
}

export default CardList;
