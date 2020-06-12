import { httpGet } from "../../api/http/GetRequest";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import GetUserService from "../../user/GetUserService";
import { GetUserTestData } from "./GetUserTestData";

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
        json: () =>
          Promise.resolve({ login: GetUserTestData.USER_LOGIN, isTermsAccepted: true }),
      })
    );
    await store.dispatch(GetUserService());

    expect(store.getActions()).toEqual([
      { type: GetUserTestData.LOGIN, user: { login: GetUserTestData.USER_LOGIN, isTermsAccepted: true } },
    ]);
  });

  it("Fires LOGOUT action when status is 401", async () => {
    httpGet.mockReturnValue(
      Promise.resolve(GetUserTestData.UNAUTHORISED_RESPONSE)
    );
    await store.dispatch(GetUserService());

    expect(store.getActions()).toEqual([GetUserTestData.LOGOUT_ACTION]);
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
      GetUserTestData.ERROR_ACTION,
    ]);
  });

  it("Fires ERROR on problem", async () => {
    httpGet.mockReturnValue(Promise.reject(new Error(GetUserTestData.ERROR_MSG)));
    await store.dispatch(GetUserService());

    expect(store.getActions()).toEqual([{ type: GetUserTestData.ERROR, message: GetUserTestData.ERROR_MSG }]);
  });

  it("calls the right API", async () => {
    httpGet.mockReturnValue(Promise.reject({}));
    await store.dispatch(GetUserService());

    expect(httpGet).toHaveBeenCalledWith(GetUserTestData.USER_PATH);
  });
});
