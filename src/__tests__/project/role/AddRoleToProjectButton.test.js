import React from "react";
import { shallow } from "enzyme";
import AddRoleToProjectButton from "../../../project/role/AddRoleToProjectButton";
import PropTypes from "prop-types";

describe("/project/list/AddRoleToProjectButton", () => {
  let renderedComponent, onAddRoleMock;
  const PROJECT_ID = "COVID-19";

  const expectedPropTypes = {
    onAddRole: PropTypes.func,
    projectId: PropTypes.string,
  };

  beforeEach(() => {
    onAddRoleMock = jest.fn();
    renderedComponent = shallow(
      <AddRoleToProjectButton
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
    expect(AddRoleToProjectButton.propTypes).toMatchObject(expectedPropTypes);
  });
});
