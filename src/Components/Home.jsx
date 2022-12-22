import React, { Component } from "react";
import Cards from "./Cards";
import Computer from "./Computer";
import Mobile from "./Mobile";
import Footer from "./Footer";
import "../Css/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Cards />
          <Computer />
          <Mobile />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
