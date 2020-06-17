import React from "react";
import "./App.css";
import ConfigLoaderService from "./config/ConfigLoaderService";
import { Switch, Route } from "react-router-dom";
import LeadListPageUi from "./lead/LeadListPageUI";
import DashboardChooserContainer from "./dashboard/DashboardChooserContainer";

function App() {
  ConfigLoaderService();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DashboardChooserContainer} />
        <Route exact path="/lead/list" component={LeadListPageUi} />
      </Switch>
    </div>
  );
}

export default App;
