import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Css/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse d-flex me-4 ">
          <img
            src={require("../assets/logo.png")}
            style={{ width: "180px" }}
            alt="logo"
          />
        </div>
        <div className="col">
          <h5 className="text-white nav-link text-muted">Support</h5>
          <span className="collapse navbar-collapse"></span>
          <NavLink className="nav-link  fw-bolder text-white" to="/contact">
            Contact Us
          </NavLink>
          <NavLink className="nav-link fw-bolder text-white" to="/">
            Help Center
          </NavLink>
          <NavLink className="nav-link  fw-bolder text-white" to="/">
            FAQ
          </NavLink>
        </div>
        <div className="col">
          <h5 className="text-white nav-link text-muted">Company</h5>
          <span className="collapse navbar-collapse"> </span>
          <NavLink className="nav-link  fw-bolder text-white" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link  fw-bolder text-white" to="/">
            Information
          </NavLink>
          <NavLink className="nav-link  fw-bolder text-white" to="/">
            Legal
          </NavLink>
          <NavLink className="nav-link  fw-bolder text-white" to="/">
            Privacy
          </NavLink>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="collapse navbar-collapse"> </span>
          <NavLink to="/">
            <FaFacebook className="text-white" />
          </NavLink>
          <NavLink to="/">
            <FaTwitter className="text-white" />
          </NavLink>
          <NavLink to="/">
            <FaLinkedin className="text-white" />
          </NavLink>
          <NavLink to="/">
            <FaGithub className="text-white" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
