import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import DashboardUI from "../dashboard/DashboardUI";
import LeadListPageUI from "../lead/LeadListPageUI";

jest.mock("../dashboard/DashboardUI", () => "DashboardUI");
jest.mock("../landing/LandingPageUI", () => "LandingPageUI");
jest.mock("../lead/LeadListPageUI", () => "LeadListPageUI");

test("renders dashboard at root", () => {
  const renderedComponent = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(renderedComponent.find(DashboardUI).length).toBe(1);
});

test("renders leads page at /landing/list", () => {
  const renderedComponent = mount(
    <MemoryRouter initialEntries={["/landing/list"]}>
      <App />
    </MemoryRouter>
  );
  expect(renderedComponent.find(LeadListPageUI).length).toBe(1);
});
