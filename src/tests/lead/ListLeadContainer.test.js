import React from "react";
import { shallow } from "enzyme";
import LeadLoadService from "../../lead/LeadLoadService";
import ListLeadContainer from "../../lead/ListLeadContainer";
import configureMockStore from "redux-mock-store";
import ListLeadUI from "../../lead/ListLeadUI";
import { LeadTestData } from "./LeadTestData";

jest.mock("../../lead/LeadLoadService");

const mockStore = configureMockStore();

describe("/lead/ListLeadContainer", () => {
  let renderedComponent;

  const store = mockStore({
    LeadList: { leadList: LeadTestData.LEAD_LIST, loading: true },
  });
  beforeEach(() => {
    LeadLoadService.mockReset();
    LeadLoadService.mockReturnValue(LeadTestData.LOAD_ACTION);
    renderedComponent = shallow(<ListLeadContainer store={store} />);
  });

  it("passes the lead list", () => {
    expect(renderedComponent.find(ListLeadUI).prop("leadList")).toEqual(
      LeadTestData.LEAD_LIST
    );
  });

  it("passes the loading flag", () => {
    expect(renderedComponent.find(ListLeadUI).prop("loading")).toBe(true);
  });

  it("binds the onLoad method", () => {
    renderedComponent.find(ListLeadUI).simulate("load");
    expect(store.getActions()).toEqual([LeadTestData.LOAD_ACTION]);
  });
});
