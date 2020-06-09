import { connect } from "react-redux";
import DashboardChooserUI from "./DashboardChooserUI";

function mapStateToProps(state) {
  let { registered, loggedIn } = state.GetUserReducer || {
    registered: false,
    loggedIn: false,
  };
  return { hasRegistration: registered, hasLoggedIn: loggedIn };
}

export default connect(mapStateToProps)(DashboardChooserUI);
