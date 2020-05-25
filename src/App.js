import React from "react";
import "./styles.scss";
import Hero from "./Hero";
import About from "./About";
import Works from "./Works";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
