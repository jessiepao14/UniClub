import Home from "./routes/home.js";
import ClubProfile from "./routes/club-profile";
import Calendar from "./routes/calendar";
import UniNav from "./routes/uni-navbar";

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Home />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/calendar" component={Calendar}></Route>
          <Route path="/club">
            <ClubProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
