import React from "react";
import { shallow } from "enzyme";
import { Container } from "react-bootstrap";
import RegistrationFormUI from "../../registration/RegistrationFormUI";

describe("/registration/RegistrationFormUI", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <RegistrationFormUI user={{ id: 42 }} shown={true} />
    );
  });

  it("is a Container", () => {
    expect(renderedComponent.find(Container).length).toBe(1);
  });
  it("contains a 'Full Name' textentry", () => {
    expect(
      renderedComponent.find("TextEntry.fullName").prop("className")
    ).toEqual("registrationView fullName");
  });
  it("contains a 'Legal form' select", () => {
    expect(
      renderedComponent.find("Selection.legalForm").prop("className")
    ).toEqual("registrationView legalForm");
  });
  it("contains a 'Legal form' select", () => {
    expect(
      renderedComponent.find("Selection.legalForm").prop("className")
    ).toEqual("registrationView legalForm");
  });
  it("contains a 'Company name' textentry", () => {
    expect(
      renderedComponent.find("TextEntry.companyName").prop("className")
    ).toEqual("registrationView companyName");
  });
});
