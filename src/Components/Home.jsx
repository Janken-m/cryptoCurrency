import React, { Component } from "react";
import Cards from "./Cards";
import Computer from "./Computer";
import Mobile from "./Mobile";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Cards />
        <Computer />
        <Mobile />
        <Footer />
      </div>
    );
  }
}

export default Home;
