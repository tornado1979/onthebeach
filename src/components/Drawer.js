import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Drawer = (props) => {
  const [active, setActive] = useState(false);

  function handleClick(event){
    console.log('event', event.target);
    setActive(!active)
  }

  const arrowStyle = classnames(
    'arrow',
    {'fa fa-angle-right': !active},
    {'fa fa-angle-down': active},
  );

  const infoBlockStyle = classnames(
    'row',
    'info-block',
    {'active': active}
  )

  return (
    <div className="drawer-wrapper">
      <div className='drawer'>
        <div className="row title" onClick={handleClick}>
          <span className="emphasize">{`${props.label.more}  `}</span>
          <span>{`${props.label.title}  `}</span>
          <i className={arrowStyle}></i>
        </div>
        <div className={infoBlockStyle}>
          <div className="overview-title emphasize">{props.label.overview}</div>
          <div className="overview-description">{props.label.info}</div>
        </div>
      </div>
    </div>
  )
}

Drawer.defaultProps = {
  label:{
    more: 'Read more',
    less: 'Read less',
    title: 'about this hotel',
    overview: 'Overview',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..'
  }
};

Drawer.propTypes = {
  label: PropTypes.shape({
    more: PropTypes.string,
    less: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    info: PropTypes.string
  })
};

export default Drawer;
