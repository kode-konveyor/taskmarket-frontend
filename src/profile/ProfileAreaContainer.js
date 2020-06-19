import ProfileAreaUI from "./ProfileAreaUI";
import { connect } from "react-redux";
import GetUserService from "../user/GetUserService";

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(GetUserService());
    },
  };
}

function mapStateToProps(state) {
  return {
    marketUser: state.GetUserReducer.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAreaUI);
