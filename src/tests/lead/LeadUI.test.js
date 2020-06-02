import React from "react";
import { shallow } from "enzyme";
import LeadUI from "../../lead/LeadUI";
import { Col } from "react-bootstrap";
import { FIRST_NAME, EMAIL, INTEREST } from "./LeadTestData";
import PropTypes from "prop-types";

describe("/lead/LeadUI", () => {
  const renderedComponent = shallow(
    <LeadUI firstName={FIRST_NAME} email={EMAIL} interest={INTEREST} />
  );

  it("renders first name", () => {
    expect(renderedComponent.find(Col).at(0).text()).toEqual(FIRST_NAME);
  });

  it("renders email", () => {
    expect(renderedComponent.find(Col).at(1).text()).toEqual(EMAIL);
  });

  it("renders interest", () => {
    expect(renderedComponent.find(Col).at(2).text()).toEqual(INTEREST);
  });

  it("has right prop-types", () => {
    const expectedPropTypes = {
      firstName: PropTypes.string,
      email: PropTypes.string,
      interest: PropTypes.string
    };
    expect(LeadUI.propTypes).toEqual(expectedPropTypes);
  });
});
