import React from 'react';
import { shallow } from 'enzyme'
import App from '../App';
import ProjectList from '../project/list/ProjectList';

test('renders ProjectList', () => {
  const renderedComponent = shallow(<App />);
  expect(renderedComponent.find(ProjectList).length).toBe(1);
});
