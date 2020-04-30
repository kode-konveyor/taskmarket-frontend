import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import ProjectListUI from "../project/list/ProjectListUI";

test("renders ProjectList", () => {
  const renderedComponent = shallow(<App />);
  expect(renderedComponent.find(ProjectListUI).length).toBe(1);
});
