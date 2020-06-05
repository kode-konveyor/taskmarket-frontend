import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import DashboardChooserContainer from "../../dashboard/DashboardChooserContainer";
import DashboardChooserUI from "../../dashboard/DashboardChooserUI";

const mockStore = configureMockStore();

describe("/dashboard/DashboardChooserContainer", () => {
  it("maps hasRegistration", () => {
    const store = mockStore({ GetUserReducer: { registered: true } });
    const renderedComponent = shallow(
      <DashboardChooserContainer store={store} />
    );
    expect(
      renderedComponent.find(DashboardChooserUI).prop("hasRegistration")
    ).toBe(true);
  });

  it("maps hasRegistration false when data is not available", () => {
    const store = mockStore({});
    const renderedComponent = shallow(
      <DashboardChooserContainer store={store} />
    );
    expect(
      renderedComponent.find(DashboardChooserUI).prop("hasRegistration")
    ).toBe(false);
  });
});
