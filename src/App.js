import React from "react";
import "./App.css";
import RegistrationFormContainer from "./registration/RegistrationFormContainer";
import ProjectListUI from "./project/list/ProjectListUI";

function App() {
  return (
    <div className="App">
      <ProjectListUI />
      <RegistrationFormContainer />
    </div>
  );
}

export default App;
