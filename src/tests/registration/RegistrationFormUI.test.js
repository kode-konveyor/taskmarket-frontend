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

  const legalForms = [
    { id: 1, country: "Hungary", legalFormName: "Freelance" },
  ];

  beforeEach(() => {
    onSubmitMock = jest.fn();
    renderedComponent = shallow(
      <RegistrationFormUI
        onSubmit={onSubmitMock}
        userLogin={USER_LOGIN}
        legalForms={legalForms}
      />
    );
  });

  it("contains a Form", () => {
    expect(renderedComponent.find(Form).length).toBe(1);
  });

  it("contains right schema", () => {
    const expectedSchema = {
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
    expect(renderedComponent.find(Form).prop("schema")).toEqual(expectedSchema);
  });

  it("adds No Data when gets no legalForm", () => {
    const renderedComponent = shallow(
      <RegistrationFormUI onSubmit={onSubmitMock} userLogin={USER_LOGIN} />
    );
    expect(
      renderedComponent.find(Form).prop("schema").properties.legalForm.anyOf[0]
    ).toEqual({ enum: [-1], title: "No data", type: "number" });
  });

  it("adds No Data when gets empty legalForm list", () => {
    const renderedComponent = shallow(
      <RegistrationFormUI
        onSubmit={onSubmitMock}
        userLogin={USER_LOGIN}
        legalForms={[]}
      />
    );
    expect(
      renderedComponent.find(Form).prop("schema").properties.legalForm.anyOf[0]
    ).toEqual({ enum: [-1], title: "No data", type: "number" });
  });

  it("forwards onSubmitEvent", () => {
    renderedComponent.find(Form).simulate("submit");
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it("has the right propTypes", () => {
    expect(RegistrationFormUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
