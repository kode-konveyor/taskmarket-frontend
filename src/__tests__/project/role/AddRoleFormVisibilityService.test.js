import AddRoleFormVisibilityService from "../../../project/role/AddRoleFormVisibilityService";
import {
  OPEN,
  CLOSE,
  SUBMIT,
} from "../../../project/role/AddToRoleFormActions";

describe("/project/role/AddRoleFormVisibilityServiceVisibilityService", () => {
  const initialState = { projectId: "" };
  const MY_PROJECT = "MY-PROJECT";

  it("keeps status when the action is out of scope", () => {
    let randomAction = { type: "RANDOM-ACTION" };
    expect(AddRoleFormVisibilityService(initialState, randomAction)).toEqual(
      initialState
    );
  });

  it("sets initial status when the action is out of scope without existing status", () => {
    let randomAction = { type: "RANDOM-ACTION" };
    expect(AddRoleFormVisibilityService(undefined, randomAction)).toEqual(
      initialState
    );
  });

  it("updates status when the action is OPEN", () => {
    const action = { type: OPEN, projectId: MY_PROJECT };
    const expectedState = { projectId: MY_PROJECT };
    expect(AddRoleFormVisibilityService(initialState, action)).toEqual(
      expectedState
    );
  });

  it("updates status when the action is OPEN without existing status", () => {
    const action = { type: OPEN, projectId: MY_PROJECT };
    const expectedState = { projectId: MY_PROJECT };
    expect(AddRoleFormVisibilityService(undefined, action)).toEqual(
      expectedState
    );
  });

  it("updates status when the action is CLOSE", () => {
    const action = { type: CLOSE };
    expect(
      AddRoleFormVisibilityService({ projectId: "PROJECT" }, action)
    ).toEqual(initialState);
  });

  it("updates status when the action is CLOSE without existing status", () => {
    const action = { type: CLOSE };
    expect(AddRoleFormVisibilityService(undefined, action)).toEqual(
      initialState
    );
  });

  it("updates status when the action is SUBMIT without existing status", () => {
    const action = {
      type: SUBMIT,
      formData: { formData: {} },
      projectId: MY_PROJECT,
    };
    expect(AddRoleFormVisibilityService(undefined, action)).toEqual(
      initialState
    );
  });
});
