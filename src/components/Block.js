import React from 'react';
import PropTypes from 'prop-types';

const Block = (props) => {
  const {
    img
  } = props

  return (
    <div className="card">
      <div className="row">
        <div className="left-colmn" style={{width: '100%'}}>
          <img src={img} style={{margin:'auto', display:'block'}} alt="no results found" />
        </div>
      </div>
    </div>
  )
}

Block.propTypes = {
  img: PropTypes.string.isRequired
};


export default Block
