import React from "react";
import "./App.css";
import ConfigLoaderService from "./config/ConfigLoaderService";
import { Switch, Route } from "react-router-dom";
import DashboardUI from "./dashboard/DashboardUI";
import LeadListPageUi from "./lead/LeadListPageUI";

function App() {
  ConfigLoaderService();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DashboardUI} />

        <Route exact path="/landing/list" component={LeadListPageUi} />
      </Switch>
    </div>
  );
}

export default App;
