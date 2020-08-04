import React from "react";
import { shallow } from "enzyme";
import Form from "react-jsonschema-form";
import PropTypes from "prop-types";
import RegistrationFormUI from "../../registration/RegistrationFormUI";
import { RegistrationTestData } from "./RegistrationTestData";

describe("/registration/RegistrationFormUI", () => {
  let renderedComponent;
  let onSubmitMock;

  const expectedPropTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    schema: PropTypes.object,
  };

  beforeEach(() => {
    onSubmitMock = jest.fn();
    renderedComponent = shallow(
      <RegistrationFormUI
        onSubmit={onSubmitMock}
        schema={RegistrationTestData.SCHEMA}
      />
    );
  });

  it("contains a Form", () => {
    expect(renderedComponent.find(Form).length).toBe(1);
  });

  it("contains right schema", () => {
    expect(
      renderedComponent.find(Form).prop(RegistrationTestData.SCHEMA_PROP)
    ).toEqual(RegistrationTestData.SCHEMA);
  });

  it("renders Loading when schema is undefined", () => {
    const renderedComponent = shallow(
      <RegistrationFormUI onSubmit={onSubmitMock} />
    );
    expect(renderedComponent.text()).toEqual(RegistrationTestData.LOADING);
  });

  it("forwards onSubmitEvent", () => {
    renderedComponent.find(Form).simulate(RegistrationTestData.SUBMIT_EVENT);
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it("has the right propTypes", () => {
    expect(RegistrationFormUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
