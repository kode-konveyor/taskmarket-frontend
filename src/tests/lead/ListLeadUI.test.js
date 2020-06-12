import React from "react";
import { shallow } from "enzyme";
import ListLeadUI from "../../lead/ListLeadUI";
import LeadUI from "../../lead/LeadUI";
import { CSVLink } from "react-csv";
import PropTypes from "prop-types";
import { LeadTestData } from "./LeadTestData";

describe("/lead/ListLeadUI", () => {
  const expectedPropTypes = {
    leadList: PropTypes.array,
    loading: PropTypes.bool,
    onLoad: PropTypes.func,
  };

  const renderedComponent = shallow(
    <ListLeadUI leadList={LeadTestData.LEAD_LIST} loading={false} />
  );

  it("renders the list of leads", () => {
    expect(renderedComponent.find(LeadUI).length).toBe(2);
  });

  it("renders the header", () => {
    expect(renderedComponent.find(LeadTestData.HEADER_CLASS).length).toBe(1);
  });

  it("renders the reload button", () => {
    expect(renderedComponent.find(LeadTestData.RELOAD_CLASS).length).toBe(1);
  });

  it("renders the Export to CSV button", () => {
    expect(renderedComponent.find(LeadTestData.EXPORT_CLASS).length).toBe(1);
  });

  it("downloads the CSV file with name kk_lead_list.csv", () => {
    expect(renderedComponent.find(CSVLink).prop(LeadTestData.FILENAME)).toEqual(
      LeadTestData.EXPECTED_FILENAME
    );
  });

  it("downloads the CSV file with actual data", () => {
    expect(renderedComponent.find(CSVLink).prop(LeadTestData.DATA)).toEqual(LeadTestData.EXPECTED_CSS);
  });

  it("renders Loading... when loading", () => {
    const renderedComponent = shallow(
      <ListLeadUI leadList={[]} loading={true} onLoad={jest.fn()} />
    );
    expect(renderedComponent.text()).toEqual(LeadTestData.LOADING_MESSAGE);
  });

  it("renders Loading... when loading is not set", () => {
    const renderedComponent = shallow(
      <ListLeadUI leadList={[]} onLoad={jest.fn()} />
    );
    expect(renderedComponent.text()).toEqual(LeadTestData.LOADING_MESSAGE);
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
    renderedComponent.find(LeadTestData.RELOAD_CLASS).simulate(LeadTestData.CLICK_EVENT);
    expect(onLoadMock).toHaveBeenCalled();
  });

  it("has right prop-types", () => {
    expect(ListLeadUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
