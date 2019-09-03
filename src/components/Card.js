import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Image from './Image';
import Rating from './Rating';
import Label from './Label';
import Drawer from './Drawer';

const label = {
  text: 'i m a text',
  type: 'sub-title'
}
export default (props) => {
  return (
    <div className="card">
      <div className="row">
        <div className="left-colmn">
          <Image />
        </div>
        <div className="right-column">
          <Label/>
          <Label label={label}/>
          <Rating />
          <Label/>
          <Label/>
          <Label/>
          <Button />
        </div>
      </div>
      <div className="row" style={{position: 'relative', top:'-37px'}}>
        <Drawer />
      </div>
    </div>
  )
}
