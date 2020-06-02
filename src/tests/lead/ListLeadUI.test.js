import React from "react";
import { shallow } from "enzyme";
import ListLeadUI from "../../lead/ListLeadUI";
import LeadUI from "../../lead/LeadUI";
import { CSVLink } from "react-csv";
import { LEAD_LIST } from "./LeadTestData";
import PropTypes from "prop-types";

describe("/lead/ListLeadUI", () => {
  const renderedComponent = shallow(
    <ListLeadUI leadList={LEAD_LIST} loading={false} />
  );

  it("renders the list of leads", () => {
    expect(renderedComponent.find(LeadUI).length).toBe(2);
  });

  it("renders the header", () => {
    expect(renderedComponent.find(".header").length).toBe(1);
  });

  it("renders the reload button", () => {
    expect(renderedComponent.find(".reload").length).toBe(1);
  });

  it("renders the Export to CSV button", () => {
    expect(renderedComponent.find(".export").length).toBe(1);
  });

  it("downloads the CSV file with name kk_lead_list.csv", () => {
    expect(renderedComponent.find(CSVLink).prop("filename")).toEqual(
      "kk_lead_list.csv"
    );
  });

  it("downloads the CSV file with actual data", () => {
    const data =
      "Bob,bob@unclebob.com,Working for KodeKonveyor\r\nMartin,martin@martinfowler.com,Working for KodeKonveyor";

    expect(renderedComponent.find(CSVLink).prop("data")).toEqual(data);
  });

  it("renders Loading... when loading", () => {
    const renderedComponent = shallow(
      <ListLeadUI leadList={[]} loading={true} onLoad={jest.fn()} />
    );
    expect(renderedComponent.text()).toEqual("Loading...");
  });

  it("renders Loading... when loading is not set", () => {
    const renderedComponent = shallow(
      <ListLeadUI leadList={[]} onLoad={jest.fn()} />
    );
    expect(renderedComponent.text()).toEqual("Loading...");
  });

  it("calls onLoad on loading", () => {
    const onLoadMock = jest.fn();
    shallow(<ListLeadUI leadList={[]} loading={true} onLoad={onLoadMock} />);
    expect(onLoadMock).toHaveBeenCalled();
  });

  it("calls onLoad on reload", () => {
    const onLoadMock = jest.fn();
    const renderedComponent = shallow(
      <ListLeadUI leadList={[]} loading={false} onLoad={onLoadMock} />
    );
    renderedComponent.find(".reload").simulate("click");
    expect(onLoadMock).toHaveBeenCalled();
  });

  it("has right prop-types", () => {
    const expectedPropTypes = {
      leadList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
      loading: PropTypes.bool,
      onLoad: PropTypes.func,
    };
    expect(ListLeadUI.propTypes).toEqual(expectedPropTypes);
  });
});
