import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  return (
    <div className="rating">
      {[1,2,3,4,5].map(item => {
        return (<div className={props.rating >= item ? 'star yellow' : 'star'} key={item}>
          <i className="fa fa-star" ></i>
          </div>)
          }
        )
      }
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
