import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/pages/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocMedia from "./components/SocMedia";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container container-fluid">
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <SocMedia />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
