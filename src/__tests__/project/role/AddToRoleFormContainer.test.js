import React from "react";
import { shallow } from "enzyme";
import AddToRoleFormContainer from "../../../project/role/AddToRoleFormContainer";
import configureMockStore from "redux-mock-store";
import { CLOSE, SUBMIT } from "../../../project/role/AddToRoleFormActions";
import AddToRoleFormUI from "../../../project/role/AddToRoleFormUI";

const mockStore = configureMockStore();

describe("/project/list/AddToRoleFormUI", () => {
  let renderedComponent, store;
  const PROJECT_ID = "XXX";
  const initialState = {
    AddRoleFormVisibilityService: { projectId: PROJECT_ID, visible: true },
  };
  const FORM_DATA = { formData: { dummy: "data" } };

  beforeEach(() => {
    store = mockStore(initialState);
    renderedComponent = shallow(
      <AddToRoleFormContainer store={store} projectId={PROJECT_ID} />
    );
  });

  it("binds projectId property", () => {
    expect(renderedComponent.find(AddToRoleFormUI).props().projectId).toEqual(
      initialState.AddRoleFormVisibilityService.projectId
    );
  });

  it("is visible when projectID is matching", () => {
    expect(renderedComponent.find(AddToRoleFormUI).props().visible).toEqual(
      true
    );
  });

  it("is hidden when projectID is matching", () => {
    let hiddenComponent = shallow(
      <AddToRoleFormContainer store={store} projectId="OTHER_PROJECT" />
    );
    expect(hiddenComponent.find(AddToRoleFormUI).props().visible).toEqual(
      false
    );
  });

  it("creates SUBMIT action on submit ", () => {
    renderedComponent
      .find(AddToRoleFormUI)
      .simulate("submit", FORM_DATA, PROJECT_ID);
    expect(store.getActions()).toEqual([
      { type: SUBMIT, formData: FORM_DATA.formData, projectId: PROJECT_ID },
    ]);
  });

  it("creates CLOSE action on cancel ", () => {
    renderedComponent.find(AddToRoleFormUI).simulate("cancel");
    expect(store.getActions()).toEqual([{ type: CLOSE }]);
  });
});
