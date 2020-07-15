import React from "react";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import { Container} from "react-bootstrap";
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
        user={{id: 42}}
        shown={true}
      />
    );
  });

  it("is a Container", () => {
    expect(renderedComponent.find(Container).length).toBe(1);
  });
  it("contains a 'Full Name' textentry", () => {
    expect(renderedComponent.find('TextEntry.fullName').prop('className')).toEqual('registrationView fullName');
  });
  it("contains a 'Legal form' select", () => {
    expect(renderedComponent.find('Selection.legalForm').prop('className')).toEqual('registrationView legalForm');
  });
  it("contains a 'Legal form' select", () => {
    expect(renderedComponent.find('Selection.legalForm').prop('className')).toEqual('registrationView legalForm');
  });
  it("contains a 'Company name' textentry", () => {
    expect(renderedComponent.find('TextEntry.companyName').prop('className')).toEqual('registrationView companyName');
  });
/*
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
  */
});
