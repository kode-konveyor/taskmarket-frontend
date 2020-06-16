import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import GetUserService from "../../user/GetUserService";
import { GetUserTestData } from "../user/GetUserTestData";
import LoginContainer from "../../main/LoginContainer";
import LoginUI from "../../main/LoginUI";
import { LoginTestData } from "./LoginTestData";

jest.mock("../../user/GetUserService");

const mockStore = configureMockStore();

describe("/main/LoginContainer", () => {
  let renderedComponent;

  const store = mockStore({
    GetUserReducer: {
      loggedIn: true,
      user: { login: GetUserTestData.USER_LOGIN },
    },
  });

  beforeEach(() => {
    GetUserService.mockReset();
    GetUserService.mockReturnValue(LoginTestData.LOGIN_ACTION);
    renderedComponent = shallow(<LoginContainer store={store} />);
  });

  it("passes loggedIn and login to the UI component", () => {
    expect(renderedComponent.find(LoginUI).props()).toMatchObject({
      loggedIn: true,
      loginName: GetUserTestData.USER_LOGIN,
    });
  });

  it("dispatches action when UI logsIn", () => {
    renderedComponent.find(LoginUI).simulate(LoginTestData.LOGIN_EVENT);
    expect(store.getActions()).toEqual([LoginTestData.LOGIN_ACTION]);
  });

  it("sets login false when data not loaded", () => {
    const store = mockStore({});
    const renderedComponent = shallow(<LoginContainer store={store} />);
    expect(renderedComponent.find(LoginUI).props()).toMatchObject({
      loggedIn: false,
    });
  });
});
