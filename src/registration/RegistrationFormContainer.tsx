import React from "react";
import { connect } from "react-redux";
import RegistrationFormUI from "./RegistrationFormUI";
import RegistrationService from "./RegistrationService.js";
import LegalFormService from "./LegalFormService.js";
import { ChangeEvent } from "react";
import { ThunkDispatch } from "./ThunkDispatch";
import { ReduxDispatch } from "./ReduxDispatch";
import { GlobalState } from "./GlobalState";
import { MarketUser } from "./MarketUser";

function valueSetter (stateName:string, value:string): CallableFunction {
  return (dispatch:ReduxDispatch) => dispatch({ type: stateName, value: value })
}


interface ITodoProps {
  user: MarketUser,
  shown: boolean
}

interface ITodoActionProps {
  valueSetter: (stateName: string, value:string) => void
}


function mapDispatchToProps(dispatch:Dispatch<GlobalState>):ITodoActionProps {

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


export default connect<ITodoProps, ITodoActionProps, {}>(mapStateToProps, mapDispatchToProps)(RegistrationFormUI);
