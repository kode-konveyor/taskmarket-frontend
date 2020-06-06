import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import LeadListPageUI from "../lead/LeadListPageUI";
import DashboardChooserContainer from "../dashboard/DashboardChooserContainer";

jest.mock("../dashboard/DashboardChooserContainer", () => "DashboardUI");
jest.mock("../lead/LeadListPageUI", () => "LeadListPageUI");

test("renders dashboard at root", () => {
  const renderedComponent = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(renderedComponent.find(DashboardChooserContainer).length).toBe(1);
});

test("renders leads page at /landing/list", () => {
  const renderedComponent = mount(
    <MemoryRouter initialEntries={["/landing/list"]}>
      <App />
    </MemoryRouter>
  );
  expect(renderedComponent.find(LeadListPageUI).length).toBe(1);
});

test("reload at /landing", () => {
  Object.defineProperty(window, "location", {
    writable: true,
    value: { reload: jest.fn() },
  });

  mount(
    <MemoryRouter initialEntries={["/landing"]}>
      <App />
    </MemoryRouter>
  );

  expect(window.location.reload).toHaveBeenCalled();
});
