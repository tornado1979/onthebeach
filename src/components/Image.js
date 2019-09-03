import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../images/hotel-image-1.png';

const Image = (props) => {
  return (
    <div>
      <img src={props.imgUrl} />
    </div>
  )
}

Image.defaultProps = {
  imgUrl: defaultImage
}
Image.propTypes = {
  imgUrl: PropTypes.string
};

export default Image;
