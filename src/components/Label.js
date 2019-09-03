import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  return (
    <div className="label">
      <span className={props.label.type}>{props.label.text}</span>
    </div>
  )
}

Label.defaultProps = {
  label:{
    text: 'Iberostar Grand Salome',
    type: 'title'
  }
};

Label.propTypes = {
  label: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string
  })
};

export default Label;
