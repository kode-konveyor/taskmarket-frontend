import LeadListActions from "./LeadListActions";

export default function LeadLoadReducer(
  state = { leadList: [], loading: true },
  action
) {
  switch (action.type) {
    case LeadListActions.LOAD:
      return { leadList: action.leadList, loading: false };
    case LeadListActions.RELOAD:
      return { leadList: state.leadList, loading: true };
    default:
      return state;
  }
}
