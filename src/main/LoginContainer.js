import { connect } from "react-redux";
import LoginUI from "./LoginUI";
import GetUserService from "../user/GetUserService";

function mapStateToProps(state) {
  const { loggedIn, login } = state.GetUserReducer || { loggedIn: false };
  return {
    loggedIn: loggedIn,
    loginName: login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => dispatch(GetUserService()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUI);
