import ProfileAreaUI from "./ProfileAreaUI";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    marketUser: state.GetUserReducer.user,
  };
}

export default connect(mapStateToProps)(ProfileAreaUI);
