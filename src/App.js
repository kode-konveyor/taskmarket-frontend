import React from "react";
import "./App.css";
import RegistrationFormContainer from "./registration/RegistrationFormContainer";
import ProjectListUI from "./project/list/ProjectListUI";
import ConfigLoaderService from "./config/ConfigLoaderService";

function App() {
  ConfigLoaderService();
  return (
    <div className="App">
      <ProjectListUI />
      <RegistrationFormContainer />
    </div>
  );
}

export default App;
