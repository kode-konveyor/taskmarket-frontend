import React from "react";
import { shallow } from "enzyme";
import UnderConstructionUI from "../../common/UnderConstructionUI";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";

const PUBLIC_URL = "http://localhost";
const TRAVOLTA_URL = PUBLIC_URL + "/img/travolta.gif";
const EXPECTED_PROP_TYPES = {
  header: PropTypes.string.isRequired,
};
describe("/common/UnderConstructionUI", () => {
  process.env = { PUBLIC_URL: PUBLIC_URL };
  const HEADER = "My Header";

  const renderedComponent = shallow(<UnderConstructionUI header={HEADER} />);

  it("renders header", () => {
    expect(renderedComponent.find("h1").text()).toEqual(HEADER);
  });

  it("renders Vincent Vega", () => {
    expect(renderedComponent.find(Image).prop("src")).toEqual(TRAVOLTA_URL);
  });

  it("has correct propTypes", () => {
    expect(UnderConstructionUI.propTypes).toMatchObject(EXPECTED_PROP_TYPES);
  });
});
