import React from 'react';
import {render} from '@testing-library/react'

import Sort from '../../components/Sort';

describe('Rating', () => {
  let mockClick
  beforeEach(() => {
    mockClick = jest.fn();
  })


  it('should display the default 3 options, when no props', () => {
    const {queryAllByText, getByText, getByTestId, container} = render(<Sort handleSortClick={mockClick}/>);
    const sortWrappper = getByTestId('sort');

    // get all <p> elements
    var elems = container.querySelectorAll('p');

    expect(`${elems[0].innerHTML}${elems[1].innerHTML}`).toBe('sort 1');
    expect(`${elems[3].innerHTML}${elems[4].innerHTML}`).toBe('sort 2');
    expect(`${elems[6].innerHTML}${elems[7].innerHTML}`).toBe('sort 3');

    expect(sortWrappper.childElementCount).toBe(3);
  })

    it('should display the correct options that passed as props', () => {
    const options = [
      {text: 'sort_a', symbol: 'symbola'},
      {text: 'sort_b', symbol: 'symbolb'},
      {text: 'sort_c', symbol: 'symbolc'}
    ];

    const {queryAllByText, getByText, getByTestId, container} = render(<Sort options={options} handleSortClick={mockClick}/>);
    const sortWrappper = getByTestId('sort');

    // get all <p> elements
    var elems = container.querySelectorAll('p');

    expect(`${elems[0].innerHTML}${elems[1].innerHTML}`).toBe('sort_a');
    expect(`${elems[3].innerHTML}${elems[4].innerHTML}`).toBe('sort_b');
    expect(`${elems[6].innerHTML}${elems[7].innerHTML}`).toBe('sort_c');

    expect(sortWrappper.childElementCount).toBe(3);
  })

});
