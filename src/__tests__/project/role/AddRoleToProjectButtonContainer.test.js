import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import AddRoleToProjectButtonContainer from "../../../project/role/AddRoleToProjectButtonContainer";
import { OPEN } from "../../../project/role/AddToRoleFormActions";

const mockStore = configureMockStore();

describe("/project/role/AddRoleToProjectButtonContainer", () => {
  let containerComponent, store;
  const PROJECT_ID = "COVID-19";

  const initialState = { projectId: "", visible: false };

  beforeEach(() => {
    store = mockStore(initialState);
    containerComponent = shallow(
      <AddRoleToProjectButtonContainer projectId={PROJECT_ID} store={store} />
    );
  });

  it("calls openAddRoleForm when button has been clicked ", () => {
    containerComponent.simulate("addRole", PROJECT_ID);
    expect(store.getActions()).toEqual([{ type: OPEN, projectId: PROJECT_ID }]);
  });
});
