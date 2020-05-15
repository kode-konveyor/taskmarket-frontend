import SubmitAddRoleService from "../../../project/role/SubmitAddRoleService";
import { httpPut } from "../../../api/http/PutRequest";
import { SUBMIT } from "../../../project/role/AddToRoleFormActions.json";
import { ADD_ROLE_TO_PROJECT_URI } from "../../../api/URLMapping.json";

jest.mock("../../../api/http/PutRequest");

describe("/project/list/SubmitAddRoleService", () => {
  const PROJECT_ID = "PROJECT";
  const ROLE_NAME = "ROLE";

  it("keeps status when the action is out of scope", () => {
    const randomAction = { type: "RANDOM-ACTION" };
    const initialState = { data: "MY-DATA" };
    expect(SubmitAddRoleService(initialState, randomAction)).toEqual(
      initialState
    );
  });

  it("sends post request on SUBMIT action", () => {
    const action = {
      type: SUBMIT,
      formData: { role: ROLE_NAME },
      projectId: PROJECT_ID,
    };
    SubmitAddRoleService({}, action);
    expect(httpPut).toHaveBeenCalledWith(ADD_ROLE_TO_PROJECT_URI, {
      roleName: ROLE_NAME,
      projectName: PROJECT_ID,
    });
  });
});
