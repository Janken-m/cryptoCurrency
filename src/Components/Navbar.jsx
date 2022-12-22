import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className=" navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex nav-item">
            <NavLink className="navbar-brand" to="/">
              <img
                src={require("../assets/logo.png")}
                style={{ width: "140px" }}
                alt="logo"
              />
            </NavLink>

            <div className="collapse navbar-collapse justify-content-end d-flex mx-4">
              <NavLink
                className="nav-link fw-bolder me-3  text-white"
                to="/market"
              >
                Market
              </NavLink>
              <NavLink
                className="nav-link fw-bolder me-3  text-white"
                to="/login"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
