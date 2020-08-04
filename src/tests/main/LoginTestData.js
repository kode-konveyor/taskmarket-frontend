import { GetUserTestData } from "../user/GetUserTestData";

export const LoginTestData = {
  LOGIN_TEXT: "Login",
  LOGIN_URL: "/market/member/login?next=random/path/where/i/am",
  HREF: "href",
  LOGIN_EVENT: "login",
  LOGIN_ACTION: {
    type: GetUserTestData.LOGIN,
    login: GetUserTestData.USER_LOGIN,
  },
};
