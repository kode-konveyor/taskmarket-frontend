import React from "react";
import { shallow } from "enzyme";
import CloseButton from "../../../uiElements/buttons/CloseButton";
import PropTypes from "prop-types";

describe("/uiElements/buttons/CloseButton", () => {
  const onCloseMock = jest.fn();
  const renderedComponent = shallow(<CloseButton onClose={onCloseMock} />);

  const expectedPropTypes = {
    onClose: PropTypes.func,
  };

  it("emits onClose event when button clicked", () => {
    renderedComponent.find(".button").simulate("click");
    expect(onCloseMock).toHaveBeenCalled();
  });

  it("has the right propTypes", () => {
    expect(CloseButton.propTypes).toMatchObject(expectedPropTypes);
  });
});
