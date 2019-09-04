import React from 'react';
import {render} from '@testing-library/react'

import Rating from '../../components/Rating';

describe('Rating', () => {
  it('should display the default number of stars, when no props', () => {
    const {getByText, getByTestId, container} = render(<Rating rating={25}/>);
    const ratingWrapper = getByTestId('rating');

    expect(ratingWrapper.childElementCount).toBe(25);
  })

  it('should display the correct number of stars, when receive props ', () => {
    const {getByText, getByTestId, container} = render(<Rating/>);
    const ratingWrapper = getByTestId('rating');

    expect(ratingWrapper.childElementCount).toBe(2);
  })

});
