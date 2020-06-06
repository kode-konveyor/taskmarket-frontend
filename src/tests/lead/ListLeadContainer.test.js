import React from "react";
import { shallow } from "enzyme";
import { loadLeadList } from "../../lead/LeadLoadService";
import ListLeadContainer from "../../lead/ListLeadContainer";
import configureMockStore from "redux-mock-store";
import ListLeadUI from "../../lead/ListLeadUI";
import { LEAD_LIST, LOAD_ACTION } from "./LeadTestData";

jest.mock("../../lead/LeadLoadService");

const mockStore = configureMockStore();

describe("/lead/ListLeadContainer", () => {
  let renderedComponent;

  const store = mockStore({
    LeadLoadService: { leadList: LEAD_LIST, loading: true },
  });
  beforeEach(() => {
    loadLeadList.mockReset();
    loadLeadList.mockReturnValue(LOAD_ACTION);
    renderedComponent = shallow(<ListLeadContainer store={store} />);
  });

  it("passes the lead list", () => {
    expect(renderedComponent.find(ListLeadUI).prop("leadList")).toEqual(
      LEAD_LIST
    );
  });

  it("passes the loading flag", () => {
    expect(renderedComponent.find(ListLeadUI).prop("loading")).toBe(true);
  });

  it("binds the onLoad method", () => {
    renderedComponent.find(ListLeadUI).simulate("load");
    expect(store.getActions()).toEqual([LOAD_ACTION]);
  });
});
