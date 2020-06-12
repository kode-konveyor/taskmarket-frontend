import LeadListActions from "./LeadListActions";
import URLMapping from "../api/URLMapping";
import { httpGet } from "../api/http/GetRequest";

export default function LeadLoadService() {
  return async (dispatch) => {
    dispatch({ type: LeadListActions.RELOAD });
    await httpGet(URLMapping.LEAD_LIST_URI)
      .then((response) => {
        response.json().then((json) => {
          dispatch({ type: LeadListActions.LOAD, leadList: json });
        });
      })
      .catch(() => dispatch({ type: LeadListActions.ERROR }));
  };
}
