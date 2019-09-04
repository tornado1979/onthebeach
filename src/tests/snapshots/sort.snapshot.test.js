import React from 'react';
import renderer from 'react-test-renderer';
import Sort from '../../components/Sort';

describe('Sort', () => {
  it('renders correctly', () => {
    const mockClick = jest.fn();
    const tree = renderer.create(
      <Sort handleSortClick={mockClick}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
