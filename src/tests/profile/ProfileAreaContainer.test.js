import React from "react";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import ProfileAreaUI from "../../profile/ProfileAreaUI";
import ProfileAreaContainer from "../../profile/ProfileAreaContainer";
import { ProfileTestData } from "./ProfileTestData";

const mockStore = configureMockStore();

describe("/profile/ProfileAreaContainer", () => {
  const store = mockStore({
    GetUserReducer: { user: ProfileTestData.MARKET_USER },
  });
  const renderedComponent = shallow(<ProfileAreaContainer store={store} />);
  it("maps marketUser", () => {
    expect(renderedComponent.find(ProfileAreaUI).prop("marketUser")).toEqual(
      ProfileTestData.MARKET_USER
    );
  });
});
