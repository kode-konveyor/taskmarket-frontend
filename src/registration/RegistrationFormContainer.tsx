import { connect } from "react-redux";
import RegistrationFormUI from "./RegistrationFormUI";
import { ReduxDispatch } from "./ReduxDispatch";
import { MarketUser } from "./MarketUser";
import { GlobalState } from "./GlobalState";
import { AnyAction } from "redux";

function valueSetter (stateName:string, value:string):AnyAction {
  return({ type: stateName, value: value })
}

interface ITodoProps {
  user: MarketUser,
  shown: boolean
}

interface ITodoActionProps {
  valueSetter: (stateName: string, value:string) => void
}


function mapDispatchToProps(dispatch:ReduxDispatch):ITodoActionProps {
  return {
    valueSetter: (stateName: string, value:string) => dispatch(valueSetter(stateName, value))
  };
}

function mapStateToProps(state:GlobalState):ITodoProps {
  return {
    user: state.user,
    shown: state.visibility.registrationForm
  };
}


export default connect<ITodoProps, ITodoActionProps, {}, GlobalState>(mapStateToProps, mapDispatchToProps)(RegistrationFormUI);
