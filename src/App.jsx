import React from "react";
import Home from "./Components/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Market from "./Components/Market";
import NotFound from "./Common/NotFound";
import LoginForm from "./Components/LoginForm";
import GainerPage from "./Components/GainerPage";
import About from "./Components/About";

function App() {
  return (
    <div className="continer">
      <Navbar />
      <Switch>
        <Route path="/market/gainerloser" component={GainerPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/market" component={Market} />
        <Route path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
