import React, { ChangeEvent } from "react";
import PropTypes from "prop-types";
import { Container } from 'react-bootstrap';

interface MarketUser {
  id: number,
  personalName: string,
}

interface EventHandler {
  (value: string): void;
}
function TextEntry (props: { className: string, value:string, onChange: (event: ChangeEvent<HTMLInputElement>) => void): JSX.Element {
  return <input type="text" id="fname" name="fname" value={props.value} onChange={props.onChange}></input>;
}

function Selection (props: { className: string, selectionMap: string }): JSX.Element {
 return  <div></div>;
}

function setState (state:string): (event: ChangeEvent<HTMLInputElement>) => void {
  return (event: ChangeEvent<HTMLInputElement>) {
    console.log(event);
    dispatch({ type: state: value: event.target.value })
  }
}

export default function RegistrationFormUI( user: MarketUser, shown: boolean ) {
  if (!shown) return <Container>Loading...</Container>;
  return (
    <Container className={'registrationView'}>
    	<TextEntry className="registrationView fullName" value={user.personalName} onChange={setState("user.fullName")} />
    	<Selection className="registrationView legalForm" selectionMap="MapLegalFormsToSelectionsService"/> 
    	<TextEntry className="registrationView companyName" value="user.personalName" onChange={setState("user.personalName")} />
    </Container>
  );
}

RegistrationFormUI.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  schema: PropTypes.object,
};
