import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import LeadListPageUI from "../lead/LeadListPageUI";
import DashboardChooserContainer from "../dashboard/DashboardChooserContainer";

jest.mock("../dashboard/DashboardChooserContainer", () => () => "DashboardUI");
jest.mock("../lead/LeadListPageUI", () => () => "LeadListPageUI");

test("renders dashboard at root", () => {
  const renderedComponent = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(renderedComponent.find(DashboardChooserContainer).length).toBe(1);
});

test("renders leads page at /lead/list", () => {
  const renderedComponent = mount(
    <MemoryRouter initialEntries={["/lead/list"]}>
      <App />
    </MemoryRouter>
  );
  expect(renderedComponent.find(LeadListPageUI).length).toBe(1);
});
