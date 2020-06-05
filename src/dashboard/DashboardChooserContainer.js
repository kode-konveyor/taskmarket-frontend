import { connect } from "react-redux";
import DashboardChooserUI from "./DashboardChooserUI";

function mapStateToProps(state) {
  let { registered } = state.GetUserReducer || { registered: false };
  return { hasRegistration: registered };
}

export default connect(mapStateToProps)(DashboardChooserUI);
