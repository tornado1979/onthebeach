import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  return (
    <div className="label">
      <span className={props.type}>{props.text}</span>
    </div>
  )
}

Label.defaultProps = {
  text: 'Iberostar Grand Salome',
  type: 'title'
};

Label.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};

export default Label;
