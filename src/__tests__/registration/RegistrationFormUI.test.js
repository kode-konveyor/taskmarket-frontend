import React from "react";
import { shallow } from "enzyme";
import Form from "react-jsonschema-form";
import PropTypes from "prop-types";
import RegistrationFormUI from "../../registration/RegistrationFormUI";

describe("/registration/RegistrationFormUI", () => {
  let renderedComponent;
  let onSubmitMock;
  const USER_LOGIN = "useR";

  const expectedPropTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  beforeEach(() => {
    onSubmitMock = jest.fn();
    renderedComponent = shallow(
      <RegistrationFormUI onSubmit={onSubmitMock} userLogin={USER_LOGIN} />
    );
  });

  it("contains a Form", () => {
    expect(renderedComponent.find(Form).length).toBe(1);
  });

  it("forwards onSubmitEvent", () => {
    renderedComponent.find(Form).simulate("submit");
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it("has the right propTypes", () => {
    expect(RegistrationFormUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
