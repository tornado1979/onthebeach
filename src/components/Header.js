import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default () => {
  return (
    <div className="header">
      <div className="menu">
        <div className="menu-item"><Link to="/" >Home</Link></div>
        <div className="menu-item"><Link to="/about" >About</Link></div>
      </div>
    </div>
  )
}
