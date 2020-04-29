import React from "react";
import { shallow } from "enzyme";
import ProjectListItemUI from "../../../project/list/ProjectListItemUI";
import AddRoleToProjectButtonContainer from "../../../project/role/AddRoleToProjectButtonContainer";
import PropTypes from "prop-types";

describe("/project/list/ProjectListItemUI", () => {
  let renderedComponent = {};
  const name = "MY PROJECT";
  const projectId = "KK-TM";

  const expectedPropTypes = {
    projectId: PropTypes.string,
    name: PropTypes.string,
  };

  beforeEach(() => {
    renderedComponent = shallow(
      <ProjectListItemUI projectId={projectId} name={name} />
    );
  });

  it("contains projectId", () => {
    expect(renderedComponent.find(".projectId").text()).toBe(projectId);
  });

  it("contains projectName", () => {
    expect(renderedComponent.find(".projectName").text()).toBe(name);
  });

  it("contains AddToRoleButton", () => {
    expect(renderedComponent.find(AddRoleToProjectButtonContainer).length).toBe(
      1
    );
  });

  it("has the right propTypes", () => {
    expect(ProjectListItemUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
