import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className="button--primary">
      <span className="text-line1" data-testid="line1">{props.textLine1}</span>
      <span className="text-line2" data-testid="line2">{props.textLine2}</span>
    </button>
  )
}

Button.defaultProps = {
  textLine1: 'Book now',
  textLine2: '£ 1,300.00'
};

Button.propTypes = {
  textLine1: PropTypes.string,
  textLine2: PropTypes.string
};

export default Button;
