import { connect } from "react-redux";
import DashboardChooserUI from "./DashboardChooserUI";

function mapStateToProps(state) {
  let { registered, loggedIn } = state.ActiveUser || {
    registered: false,
    loggedIn: false,
  };
  return { hasRegistration: registered, hasLoggedIn: loggedIn };
}

export default connect(mapStateToProps)(DashboardChooserUI);
