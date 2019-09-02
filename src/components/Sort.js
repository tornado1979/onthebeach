import React, { useState } from 'react';
import PropTypes from 'prop-types';

import reg from '../helpers/reg';

const Sort = (props) => {
  // default active option is the 1st
  const [active, setActive] = useState(0);


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

    props.handleSortClick(event);

    // update state
    setActive(activeOption);
  }

  let msg;
  return (
    <div className="sort">
      {props.options.map((sort, idx) => {
      msg = reg(sort.text);
      return (<div className={active === idx ? 'option active' : 'option'}
                   id={idx}
                   key={sort.text}
                   onClick={handleClick}>
                <p>{msg.first}</p>
                <p className="emphasized">{msg.second}</p>
                {getSymbol(sort.symbol)}
              </div>)
    })}
    </div>
  )
}

Sort.defaultProps  = {
  options: [{text: 'sort 1', symbol: 'symbol1'}, {text: 'sort 2', symbol: 'symbol2'}, {text: 'sort 3', symbol: 'symbol3'}]
}

Sort.propTypes = {
  options: PropTypes.array,
  handleSortClick: PropTypes.func.isRequired,
}

export default Sort;
