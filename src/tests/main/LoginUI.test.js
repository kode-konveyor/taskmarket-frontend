import React from "react";
import { shallow } from "enzyme";
import LoginUI from "../../main/LoginUI";
import { Nav } from "react-bootstrap";
import { GetUserTestData } from "../user/GetUserTestData";
import { LoginTestData } from "./LoginTestData";
import PropTypes from "prop-types";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "random/path/where/i/am" }),
}));

describe("/main/LoginUI", () => {
  const onLogin = jest.fn();

  const expectedPropTypes = {
    loggedIn: PropTypes.bool,
    loginName: PropTypes.string,
    onLogin: PropTypes.func,
  };

  beforeEach(() => {
    onLogin.mockReset();
  });
  it("renders login button", () => {
    const renderedComponent = shallow(
      <LoginUI loggedIn={false} onLogin={onLogin} />
    );
    expect(renderedComponent.find(Nav.Link).text()).toEqual(
      LoginTestData.LOGIN_TEXT
    );
  });

  it("renders Logout when logged in", () => {
    const renderedComponent = shallow(
      <LoginUI
        loggedIn={true}
        loginName={GetUserTestData.USER_LOGIN}
        onLogin={onLogin}
      />
    );
    expect(renderedComponent.find(Nav.Link).text()).toEqual(
      GetUserTestData.LOGOUT_TEXT
    );
  });

  it("calls onLogin on rendering", () => {
    shallow(
      <LoginUI
        loggedIn={true}
        loginName={GetUserTestData.USER_LOGIN}
        onLogin={onLogin}
      />
    );
    expect(onLogin).toHaveBeenCalledTimes(1);
  });

  it("sets login url", () => {
    const renderedComponent = shallow(
      <LoginUI loggedIn={false} onLogin={onLogin} />
    );
    expect(renderedComponent.find(Nav.Link).prop(LoginTestData.HREF)).toEqual(
      LoginTestData.LOGIN_URL
    );
  });

  it("has correct PropTypes", () => {
    expect(LoginUI.propTypes).toEqual(expectedPropTypes);
  });
});
