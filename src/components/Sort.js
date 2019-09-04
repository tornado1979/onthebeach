import React, { useState } from 'react';
import PropTypes from 'prop-types';

import reg from '../helpers/reg';

const Sort = (props) => {
  // default active option is passed from props
  const [active, setActive] = useState(props.defaultActive);

  /**
  * @desc handle click
  * @param string $symbol - option's symbol, e.g. £
  * @return jsx.element
  */
  function getSymbol(symbol){
    switch(symbol){
      case 'star':
        return (
           <i className="fa fa-star"></i>
        )
      case 'price':
        return (<div className="circle">
        <div className="price-symbol">
        </div>
      </div>)
      case 'calendar':
        return <i className="fa fa-calendar" aria-hidden="true"></i>
      case 'plane':
         return <i className="fa fa-paper-plane" aria-hidden="true"></i>
      default:
        return <p className="alphabetical">{symbol}</p>
    }
  }

  /**
  * @desc handle click
  * @param object $event - clicked element, either the parent <div> or the child <p>
  * @return n/a
  */
  function handleClick(event){
    // get the selected option
    const selectedOption = event.target.classList.contains('option') ?
     event.target : event.target.parentElement;

    const activeOption = parseInt(selectedOption.id);

    props.handleSortClick(selectedOption);

    // update state
    setActive(activeOption);
  }

  let msg;
  return (
    <div className="sort" data-testid="sort">
      {props.options.map((sort, idx) => {
      msg = reg(sort.text);
      return (<div className={active === idx ? 'option active' : 'option'}
                   id={idx}
                   key={sort.text}
                   onClick={handleClick}>
                <p >{msg.first}</p>
                <p className="emphasized">{msg.second}</p>
                {getSymbol(sort.symbol)}
              </div>)
    })}
    </div>
  )
}

Sort.defaultProps  = {
  options: [
    {text: 'sort 1', symbol: 'symbol 1'},
    {text: 'sort 2', symbol: 'symbol 2'},
    {text: 'sort 3', symbol: 'symbol 3'}
  ]
}

Sort.propTypes = {
  defaultActive: PropTypes.number,
  options: PropTypes.array,
  handleSortClick: PropTypes.func.isRequired,
}

export default Sort;
