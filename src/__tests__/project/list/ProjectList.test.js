import React from "react";

import { shallow } from "enzyme";
import ProjectList from "../../../project/list/ProjectList";
import ProjectListBox from "../../../project/list/ProjectListBox";

describe("/project/list/ProjectList", () => {
  let renderedComponent = {};

  beforeEach(() => {
    renderedComponent = shallow(<ProjectList />);
  });

  it("contains ProjectListBox", () => {
    expect(renderedComponent.find(ProjectListBox).length).toBe(1);
  });
});
