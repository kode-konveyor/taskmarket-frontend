import React from 'react';
import './App.css';
import ProjectList from './project/list/ProjectList';
import RegistrationFormContainer from './registration/RegistrationFormContainer';

function App() {
  return (
    <div className="App">
      <ProjectList/>
      <RegistrationFormContainer/>
    </div>
  );
}

export default App;
