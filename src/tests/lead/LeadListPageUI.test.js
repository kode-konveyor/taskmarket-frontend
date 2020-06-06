import React from "react";
import { shallow } from "enzyme";
import LeadListPageUI from "../../lead/LeadListPageUI";
import ListLeadContainer from "../../lead/ListLeadContainer";

describe("/lead/LeadListPageUI", () => {
  it("contains ListLeadContainer", () => {
    const renderedComponent = shallow(<LeadListPageUI />);
    expect(renderedComponent.find(ListLeadContainer).length).toBe(1);
  });
});
