import { httpGet } from "../../api/http/GetRequest";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import GetUserService from "../../user/GetUserService";
import { LOGIN, LOGOUT, ERROR, USER_LOGIN } from "./GetUserTestData";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../api/http/GetRequest");

describe("/user/GetUserService", () => {
  let store;

  beforeEach(() => {
    httpGet.mockReset();
    store = mockStore({ loggedIn: false });
  });

  it("Fires LOGIN action when get is successfull", async () => {
    httpGet.mockReturnValue(
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ login: USER_LOGIN }),
      })
    );
    await store.dispatch(GetUserService());

    expect(store.getActions()).toEqual([{ type: LOGIN, login: USER_LOGIN}]);
  });

  it("Fires LOGOUT action when status is 401", async () => {
    httpGet.mockReturnValue(
      Promise.resolve({
        status: 401,
        ok: false,
      })
    );
    await store.dispatch(GetUserService());

    expect(store.getActions()).toEqual([{ type: LOGOUT }]);
  });

  it("Fires ERROR on other statuses", async () => {
    httpGet.mockReturnValue(
      Promise.resolve({
        status: 404,
        ok: false,
      })
    );
    await store.dispatch(GetUserService());

    expect(store.getActions()).toEqual([
      { type: ERROR, message: "Failed to load user info" },
    ]);
  });

  it("Fires ERROR on problem", async () => {
    httpGet.mockReturnValue(Promise.reject({}));
    await store.dispatch(GetUserService());

    expect(store.getActions()).toEqual([{ type: ERROR, message: {} }]);
  });

  it("calls the right API", async () => {
    httpGet.mockReturnValue(Promise.reject({}));
    await store.dispatch(GetUserService());

    expect(httpGet).toHaveBeenCalledWith("/member/user");
  });
});
