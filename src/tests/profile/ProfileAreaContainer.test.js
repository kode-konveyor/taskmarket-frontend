import React from "react";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import ProfileAreaUI from "../../profile/ProfileAreaUI";
import ProfileAreaContainer from "../../profile/ProfileAreaContainer";
import { ProfileTestData } from "./ProfileTestData";
import { GetUserTestData } from "../user/GetUserTestData";
import thunk from "redux-thunk";
import GetUserService from "../../user/GetUserService";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../user/GetUserService");

GetUserService.mockReturnValue({ type: "GET_USER_ACTIONS_LOGOUT" });

describe("/profile/ProfileAreaContainer", () => {
  const store = mockStore({
    ActiveUser: { user: ProfileTestData.MARKET_USER },
  });
  const renderedComponent = shallow(<ProfileAreaContainer store={store} />);
  it("maps marketUser", () => {
    expect(renderedComponent.find(ProfileAreaUI).prop("marketUser")).toEqual(
      ProfileTestData.MARKET_USER
    );
  });

  it("calls GetUserService", () => {
    renderedComponent.find(ProfileAreaUI).simulate("load");
    expect(store.getActions()).toEqual([GetUserTestData.LOGOUT_ACTION]);
  });
});
