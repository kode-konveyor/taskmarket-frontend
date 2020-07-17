import React from "react";
import { shallow, mount } from "enzyme";
import { Container } from "react-bootstrap";
import RegistrationFormUI from "../../registration/RegistrationFormUI";

describe("/registration/RegistrationFormUI", () => {
  const setValueMock = jest.fn();
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(
      <RegistrationFormUI
        user={{ id: 42 }}
        shown={true}
        valueSetter={setValueMock}
      />
    );
    setValueMock.mockReset();
  });

  it("is a Container", () => {
    expect(renderedComponent.find(Container).length).toBe(1);
  });

  it("has registrationView class", () => {
    expect(renderedComponent.find(Container).prop("className")).toEqual(
      "registrationView"
    );
  });

  it("contains a 'Full Name' textentry", () => {
    expect(
      renderedComponent.find("TextEntry.fullName").prop("className")
    ).toEqual("registrationView fullName");
  });

  it("Full Name change updates personalName", () => {
    renderedComponent
      .find("TextEntry.fullName")
      .simulate("change", "György Soros");
    expect(setValueMock).toHaveBeenCalledWith(
      "user.personalName",
      "György Soros"
    );
  });

  it("contains a 'Legal form' select", () => {
    expect(
      renderedComponent.find("Selection.legalForm").prop("className")
    ).toEqual("registrationView legalForm");
  });
  it("Legal form change updates legalForm", () => {
    const renderedComponent = mount(
      <RegistrationFormUI
        user={{ id: 42 }}
        shown={true}
        valueSetter={setValueMock}
      />
    );
    renderedComponent
      .find("Selection.legalForm select")
      .simulate("change", { target: { value: 1 } });
    expect(setValueMock).toHaveBeenCalledWith("user.legalForm", 1);
  });
  it("contains a 'Company name' textentry", () => {
    expect(
      renderedComponent.find("TextEntry.companyName").prop("className")
    ).toEqual("registrationView companyName");
  });
  it("Company Name change updates legalName", () => {
    renderedComponent.find("TextEntry.companyName").simulate("change", "OSF");
    expect(setValueMock).toHaveBeenCalledWith("user.legalName", "OSF");
  });
  it("renders Loading when shown is false", () => {
    const renderedComponent = shallow(<RegistrationFormUI shown={false} />);
    expect(renderedComponent.find(Container).text()).toEqual("Loading...");
  });
});
