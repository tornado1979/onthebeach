import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../../components/Label';

describe('Label', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Label/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
