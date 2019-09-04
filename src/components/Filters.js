import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  // default active option is passed from props
  const [active, setActive] = useState(props.defaultActive);

  /**
  * @desc handle click
  * @param object $event - clicked element, either the parent <div> or the child <p>
  * @return the selected value , e.g. 23th May 2019
  */
  function handleClick(event){
    // get the selected option
    const selectedOption = event.target.classList.contains('option') ?
     event.target : event.target.parentElement;

    const activeOption = parseInt(selectedOption.id);

    const selectedValue = selectedOption.innerText;
    const fieldName = selectedOption.dataset.fieldname;

    props.handleFilterClick(selectedValue, fieldName);

    // update state
    setActive(activeOption);
  }

  return (
    <div className="filters" data-testid="filters">
      <div className="option title"><p>Filter your results</p></div>
      {props.options.map((filter, idx) => {
      return (<div className={active === idx ? 'option active' : 'option'}
                data-fieldname={filter.fieldName}
                id={idx}
                key={idx}
                onClick={handleClick}>
                <p >{filter.text}</p>
              </div>)
    })}
    </div>
  )
}

Filters.defaultProps  = {
  options: [
    {text: 'sort 1', fieldName: ''},
    {text: 'sort 2', fieldName: ''},
    {text: 'sort 3', fieldName: ''}
  ]
}

Filters.propTypes = {
  defaultActive: PropTypes.number,
  options: PropTypes.array,
  handleFilterClick: PropTypes.func.isRequired,
}

export default Filters;
