import React from 'react';
import renderer from 'react-test-renderer';
import Drawer from '../../components/Drawer';

describe('Drawer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Drawer/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
