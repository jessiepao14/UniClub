import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import { Switch, Route, Redirect, useEffect } from "react-router";

import Home from "./pages/home.js";
import ClubProfile from "./pages/club-profile";
import Calendar from "./pages/calendar";
import UniNav from "./pages/uni-navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <UniNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/club" component={ClubProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
