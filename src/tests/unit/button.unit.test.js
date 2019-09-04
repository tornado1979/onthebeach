import React from 'react';
import {render} from '@testing-library/react'

import Button from '../../components/Button';

describe('Button', () => {
  it('finds default texts', () => {
    const {getByText, getByTestId, container} = render(<Button/>);
    const spanElem1 = getByTestId('line1');
    const spanElem2 = getByTestId('line2');
    expect(spanElem1.innerHTML).toBe('Book now');
    expect(spanElem2.innerHTML).toBe("£ 1,300.00");
  })

    it('displays props', () => {
    const {getByText, getByTestId, container} = render(<Button textLine1='Hello' textLine2='test test' />);
    const spanElem1 = getByTestId('line1');
    const spanElem2 = getByTestId('line2');
    expect(spanElem1.innerHTML).toBe('Hello');
    expect(spanElem2.innerHTML).toBe("test test");
  })
});
