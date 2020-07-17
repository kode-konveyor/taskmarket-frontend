import React, { ChangeEvent } from "react";
import { Container } from 'react-bootstrap';
import { MarketUser } from "./MarketUser";

interface ValuedEventHandler {
  (value: string):void
}


function TextEntry (props: { className: string, value:string, onChange: ValuedEventHandler}): JSX.Element {
  function getValue(event:ChangeEvent<HTMLInputElement>) {
    props.onChange(event.target.value)
  }
  return <input type="text" id="fname" name="fname" value={props.value} onChange={getValue}></input>;
}

function Selection (props: { className: string, selectionMap: string, onChange: ValuedEventHandler}): JSX.Element {
 return  (<select onChange={(event: ChangeEvent<HTMLSelectElement>) => props.onChange(event.target.value)}>
   <option value={1}>Dummy</option>
 </select>)
}


export default function RegistrationFormUI( props: {user: MarketUser, shown: boolean, valueSetter: (stateName: string, value: string) => void }): ReactElement {
  
  function setState(stateName: string) {
    return (value: string) => props.valueSetter(stateName, value);
  }

  if (!props.shown) return <Container>Loading...</Container>;
  return (
    <Container className={'registrationView'}>
    	<TextEntry className="registrationView fullName" value={props.user.personalName} onChange={setState("user.personalName")} />
    	<Selection className="registrationView legalForm" selectionMap="MapLegalFormsToSelectionsService" onChange={setState("user.legalForm")}/> 
    	<TextEntry className="registrationView companyName" value="user.legalName" onChange={setState("user.legalName")} />
    </Container>
  );
}
