import React from "react";
import Home from "./Components/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Pool from "./Components/Pool";
import Contact from "./Components/Contact";
import Market from "./Components/Market";
import NotFound from "./Common/NotFound";
import LoginForm from "./Components/LoginForm";
import GainerPage from "./Components/GainerPage";

function App() {
  return (
    <div className="continer">
      <Navbar />
      <Switch>
        <Route path="/market/gainerloser" component={GainerPage} />
        <Route path="/pool" component={Pool} />
        <Route path="/login" component={LoginForm} />
        <Route path="/market" component={Market} />
        <Route path="/contact" component={Contact} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
