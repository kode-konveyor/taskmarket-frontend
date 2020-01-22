import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import AddButton from './uiElements/buttons/AddButton';

test('renders addButton', () => {
  const renderedComponent = shallow(<App />);
  expect(renderedComponent.find(AddButton).length).toBe(1);
});
