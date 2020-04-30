import React from "react";

import { shallow } from "enzyme";
import List from "../../../common/List";
import ProjectListItemUI from "../../../project/list/ProjectListItemUI";
import ProjectListUI from "../../../project/list/ProjectListUI";

describe("/project/list/ProjectListUI", () => {
  let renderedComponent = {};

  beforeEach(() => {
    renderedComponent = shallow(<ProjectListUI />);
  });

  it("contains List of ProjectListItem", () => {
    expect(renderedComponent.find(List).props().Of).toBe(ProjectListItemUI);
  });
});
