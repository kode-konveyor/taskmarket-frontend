import React from "react";
import { shallow } from "enzyme";
import LeadUI from "../../lead/LeadUI";
import { Col } from "react-bootstrap";
import { LeadTestData } from "./LeadTestData";
import PropTypes from "prop-types";

describe("/lead/LeadUI", () => {
  const renderedComponent = shallow(
    <LeadUI
      firstName={LeadTestData.FIRST_NAME}
      email={LeadTestData.EMAIL}
      interest={LeadTestData.INTEREST}
    />
  );

  it("renders first name", () => {
    expect(renderedComponent.find(Col).at(0).text()).toEqual(
      LeadTestData.FIRST_NAME
    );
  });

  it("renders email", () => {
    expect(renderedComponent.find(Col).at(1).text()).toEqual(
      LeadTestData.EMAIL
    );
  });

  it("renders interest", () => {
    expect(renderedComponent.find(Col).at(2).text()).toEqual(
      LeadTestData.INTEREST
    );
  });

  it("has right prop-types", () => {
    const expectedPropTypes = {
      firstName: PropTypes.string,
      email: PropTypes.string,
      interest: PropTypes.string,
    };
    expect(LeadUI.propTypes).toEqual(expectedPropTypes);
  });
});
