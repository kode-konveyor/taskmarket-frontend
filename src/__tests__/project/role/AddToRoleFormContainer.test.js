import React from "react";
import { shallow } from "enzyme";
import AddToRoleFormContainer from "../../../project/role/AddToRoleFormContainer";
import AddToRoleForm from "../../../project/role/AddToRoleForm";
import configureMockStore from "redux-mock-store";
import { CLOSE, SUBMIT } from "../../../project/role/AddToRoleFormActions";

const mockStore = configureMockStore();

describe("/project/list/AddToRoleForm", () => {
  let renderedComponent, store;
  const PROJECT_ID = "XXX";
  const initialState = {
    addRoleForm: { projectId: PROJECT_ID, visible: true },
  };
  const FORM_DATA = { formData: { dummy: "data" } };

  beforeEach(() => {
    store = mockStore(initialState);
    renderedComponent = shallow(
      <AddToRoleFormContainer store={store} projectId={PROJECT_ID} />
    );
  });

  it("binds projectId property", () => {
    expect(renderedComponent.find(AddToRoleForm).props().projectId).toEqual(
      initialState.addRoleForm.projectId
    );
  });

  it("is visible when projectID is matching", () => {
    expect(renderedComponent.find(AddToRoleForm).props().visible).toEqual(true);
  });

  it("is hidden when projectID is matching", () => {
    let hiddenComponent = shallow(
      <AddToRoleFormContainer store={store} projectId="OTHER_PROJECT" />
    );
    expect(hiddenComponent.find(AddToRoleForm).props().visible).toEqual(false);
  });

  it("creates SUBMIT action on submit ", () => {
    renderedComponent
      .find(AddToRoleForm)
      .simulate("submit", FORM_DATA, PROJECT_ID);
    expect(store.getActions()).toEqual([
      { type: SUBMIT, formData: FORM_DATA.formData, projectId: PROJECT_ID },
    ]);
  });

  it("creates CLOSE action on cancel ", () => {
    renderedComponent.find(AddToRoleForm).simulate("cancel");
    expect(store.getActions()).toEqual([{ type: CLOSE }]);
  });
});
