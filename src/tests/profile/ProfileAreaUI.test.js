import React from "react";
import { shallow } from "enzyme";
import ProfileAreaUI from "../../profile/ProfileAreaUI";
import { PropTypes } from "prop-types";
import { ProfileTestData } from "./ProfileTestData";

describe("/profile/ProfileAreaUI", () => {
  const renderedComponent = shallow(
    <ProfileAreaUI marketUser={ProfileTestData.MARKET_USER} />
  );
  it("renders controls", () => {
    expect(
      renderedComponent
        .find(".profile-control")
        .map((control) => control.text())
    ).toEqual([
      ProfileTestData.MARKET_USER.login,
      ProfileTestData.MARKET_USER.personalName,
      ProfileTestData.MARKET_USER.legalName,
      ProfileTestData.MARKET_USER.legalAddress,
      ProfileTestData.MARKET_USER.email,
      ProfileTestData.FORMATTED_BUDGET,
    ]);
  });

  it("renders labels", () => {
    expect(
      renderedComponent.find(".profile-label").map((label) => label.text())
    ).toEqual([
      ProfileTestData.MARKET_USER_LABELS.login,
      ProfileTestData.MARKET_USER_LABELS.personalName,
      ProfileTestData.MARKET_USER_LABELS.legalName,
      ProfileTestData.MARKET_USER_LABELS.legalAddress,
      ProfileTestData.MARKET_USER_LABELS.email,
      ProfileTestData.MARKET_USER_LABELS.budget,
    ]);
  });

  it("has correct propTypes", () => {
    const expectedPropTypes = {
      marketUser: PropTypes.object,
    };
    expect(ProfileAreaUI.propTypes).toMatchObject(expectedPropTypes);
  });
});
