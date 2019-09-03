import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  function buildRatingStars(){
    let rating_stars=[];

    for(let i=0;i<props.rating;i++){
      rating_stars.push(<div className={props.rating >= i ? 'star yellow' : 'star'} key={i}>
          <i className="fa fa-star" ></i>
          </div>)
    }

    return rating_stars;
  }

  return (
    <div className="rating">
      {buildRatingStars()}
    </div>
  )
}

Rating.defaultProps = {
  rating: 2,
}
Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
