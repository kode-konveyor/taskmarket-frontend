import { connect } from "react-redux";
import LoginUI from "./LoginUI";
import GetUserService from "../user/GetUserService";

function mapStateToProps(state) {
  const { loggedIn, user } = state.GetUserReducer || {
    loggedIn: false,
    user: {},
  };
  return {
    loggedIn: loggedIn,
    loginName: user.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => dispatch(GetUserService()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUI);
