import React, { Dispatch } from "react";
import { connect, DefaultRootState } from "react-redux";
import RegistrationFormUI from "./RegistrationFormUI";
import RegistrationService from "./RegistrationService.js";
import LegalFormService from "./LegalFormService.js";
import { ChangeEvent } from "react";
import { ThunkDispatch } from "./ThunkDispatch";
import { ReduxDispatch } from "./ReduxDispatch";
import { MarketUser } from "./MarketUser";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { GlobalState } from "./GlobalState";
import { Action, AnyAction } from "redux";

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
