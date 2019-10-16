import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";

import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Switch> */}
        {/* <Route exact path="/" component={Login} /> */}
        <Friends />
        {/* <Route path="/friends" component={Friends} /> */}
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
