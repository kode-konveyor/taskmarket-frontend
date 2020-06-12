import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import DashboardChooserContainer from "../../dashboard/DashboardChooserContainer";
import DashboardChooserUI from "../../dashboard/DashboardChooserUI";
import {DashboardTestData} from './DashboardTestData';

const mockStore = configureMockStore();

describe("/dashboard/DashboardChooserContainer", () => {
  const store = mockStore({
    GetUserReducer: { registered: true, loggedIn: true },
  });
  const renderedComponent = shallow(
    <DashboardChooserContainer store={store} />
  );
  it("maps hasRegistration", () => {
    expect(
      renderedComponent.find(DashboardChooserUI).prop(DashboardTestData.HAS_REGISTRATION)
    ).toBe(true);
  });

  it("maps hasLoggedIn", () => {
    expect(renderedComponent.find(DashboardChooserUI).prop(DashboardTestData.HAS_LOGGED_IN)).toBe(
      true
    );
  });

  it("maps hasRegistration false when data is not available", () => {
    const store = mockStore({});
    const renderedComponent = shallow(
      <DashboardChooserContainer store={store} />
    );
    expect(
      renderedComponent.find(DashboardChooserUI).prop(DashboardTestData.HAS_REGISTRATION)
    ).toBe(false);
  });

  it("maps hasLoggedIn false when data is not available", () => {
    const store = mockStore({});
    const renderedComponent = shallow(
      <DashboardChooserContainer store={store} />
    );
    expect(renderedComponent.find(DashboardChooserUI).prop(DashboardTestData.HAS_LOGGED_IN)).toBe(
      false
    );
  });
});
