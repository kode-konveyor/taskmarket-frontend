import React, { ChangeEvent, ComponentType, ReactElement } from "react";
import PropTypes from "prop-types";
import { Container } from 'react-bootstrap';
import { MarketUser } from "./MarketUser";
import { findRenderedComponentWithType } from "react-dom/test-utils";

interface ValuedEventHandler {
  (value: string):void
}


function TextEntry (props: { className: string, value:string, onChange: ValuedEventHandler}): JSX.Element {
  function getValue(event:ChangeEvent<HTMLInputElement>) {
    props.onChange(event.target.value)
  }
  return <input type="text" id="fname" name="fname" value={props.value} onChange={getValue}></input>;
}

function Selection (props: { className: string, selectionMap: string }): JSX.Element {
 return  <div></div>;
}


export default function RegistrationFormUI( props: {user: MarketUser, shown: boolean, valueSetter: (stateName: string, value: string) => void }): ReactElement {
  
  function setState(stateName: string) {
    return (value: string) => props.valueSetter(stateName, value);
  }

  if (!props.shown) return <Container>Loading...</Container>;
  return (
    <Container className={'registrationView'}>
    	<TextEntry className="registrationView fullName" value={props.user.personalName} onChange={setState("user.fullName")} />
    	<Selection className="registrationView legalForm" selectionMap="MapLegalFormsToSelectionsService"/> 
    	<TextEntry className="registrationView companyName" value="user.personalName" onChange={setState("user.personalName")} />
    </Container>
  );
}
