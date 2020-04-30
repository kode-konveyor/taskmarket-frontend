import React from "react";
import { shallow } from "enzyme";
import List from "../../common/List";
import PropTypes from "prop-types";

function Person(_id, name) {
  return <span>{_id + ". " + name}</span>;
}

const persons = [
  { _id: 1, name: "John Doe" },
  { _id: 2, name: "Karcsi Kadlot" },
];
let renderedComponent = {};
const expectedPropTypes = {
  Of: PropTypes.elementType,
  className: PropTypes.string,
  data: PropTypes.array,
};

beforeEach(() => {
  renderedComponent = shallow(
    <List Of={Person} data={persons} className="personList" />,
    { disableLifecycleMethods: false }
  );
});

it("renders node with correct class name", () => {
  expect(renderedComponent.find(".personList").length).toBe(1);
});

it("renders as many children as the length of input list", () => {
  expect(renderedComponent.find(Person).length).toBe(persons.length);
});

it("renders empty list when data is not an array", () => {
  renderedComponent = shallow(<List Of={Person} className="personList" />, {
    disableLifecycleMethods: false,
  });
  expect(renderedComponent.find("ul").text()).toEqual(" ");
});

it("has the right propTypes", () => {
  expect(List.propTypes).toMatchObject(expectedPropTypes);
});
