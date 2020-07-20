import { connect } from "react-redux";
import RegistrationFormUI from "./RegistrationFormUI";
import { ReduxDispatch } from "./ReduxDispatch";
import { MarketUser } from "./MarketUser";
import { GlobalState } from "./GlobalState";
import { AnyAction } from "redux";

function valueSetter (stateName:string, value:string):AnyAction {
  return({ type: stateName, value: value })
}

interface IRegistrationProps {
  user: MarketUser,
  shown: boolean
}

interface IRegistrationActionProps {
  valueSetter: (stateName: string, value:string) => void
}


function mapDispatchToProps(dispatch:ReduxDispatch):IRegistrationActionProps {
  return {
    valueSetter: (stateName: string, value:string) => dispatch(valueSetter(stateName, value))
  };
}

function mapStateToProps(state:GlobalState):IRegistrationProps {
  return {
    user: state.user,
    shown: state.visibility.registrationForm
  };
}


export default connect<IRegistrationProps, IRegistrationActionProps, {}, GlobalState>(mapStateToProps, mapDispatchToProps)(RegistrationFormUI);
