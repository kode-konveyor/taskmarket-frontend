import React from "react";
import { shallow } from "enzyme";
import AddRoleToProjectButtonUI from "../../../project/role/AddRoleToProjectButtonUI";
import PropTypes from "prop-types";

describe("/project/list/AddRoleToProjectButtonUI", () => {
  let renderedComponent, onAddRoleMock;
  const PROJECT_ID = "COVID-19";

  const expectedPropTypes = {
    onAddRole: PropTypes.func,
    projectId: PropTypes.string,
  };

  beforeEach(() => {
    onAddRoleMock = jest.fn();
    renderedComponent = shallow(
      <AddRoleToProjectButtonUI
        onAddRole={onAddRoleMock}
        projectId={PROJECT_ID}
      />
    );
  });

  it("calls onAddRole when button is clicked", () => {
    renderedComponent.find('input[type="button"]').simulate("click");
    expect(onAddRoleMock).toHaveBeenCalledWith(PROJECT_ID);
  });

  it("has the right propTypes", () => {
    expect(AddRoleToProjectButtonUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
