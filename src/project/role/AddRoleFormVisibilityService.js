import { OPEN, CLOSE, SUBMIT } from "./AddToRoleFormActions";

const INITIAL_STATE = { projectId: "" };

export default function AddRoleFormVisibilityService(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case OPEN:
      return { projectId: action.projectId };
    case CLOSE:
    case SUBMIT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
