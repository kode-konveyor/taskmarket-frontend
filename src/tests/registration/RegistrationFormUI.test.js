import React from "react";
import { shallow } from "enzyme";
import Form from "react-jsonschema-form";
import PropTypes from "prop-types";
import RegistrationFormUI from "../../registration/RegistrationFormUI";

describe("/registration/RegistrationFormUI", () => {
  let renderedComponent;
  let onSubmitMock;

  const expectedPropTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    schema: PropTypes.object,
  };

  const LOADING = "Loading...";

  const schema = {
    properties: {
      email: { title: "E-mail", type: "string" },
      isTermsAccepted: {
        title: "Accept terms and consitions",
        type: "boolean",
      },
      legalAddress: { title: "Address", type: "string" },
      legalForm: {
        anyOf: [{ enum: [1], title: "Freelance - Hungary", type: "number" }],
        title: "Legal Form",
        type: "number",
      },
      legalName: { title: "Company Name", type: "string" },
      personalName: { title: "Full Name", type: "string" },
    },
    required: [
      "personalName",
      "legalForm",
      "legalAddress",
      "email",
      "isTermsAccepted",
    ],
    type: "object",
  };

  beforeEach(() => {
    onSubmitMock = jest.fn();
    renderedComponent = shallow(
      <RegistrationFormUI onSubmit={onSubmitMock} schema={schema} />
    );
  });

  it("contains a Form", () => {
    expect(renderedComponent.find(Form).length).toBe(1);
  });

  it("contains right schema", () => {
    expect(renderedComponent.find(Form).prop("schema")).toEqual(schema);
  });

  it("renders Loading when schema is undefined", () => {
    const renderedComponent = shallow(
      <RegistrationFormUI onSubmit={onSubmitMock} />
    );
    expect(renderedComponent.text()).toEqual(LOADING);
  });

  it("forwards onSubmitEvent", () => {
    renderedComponent.find(Form).simulate("submit");
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it("has the right propTypes", () => {
    expect(RegistrationFormUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
