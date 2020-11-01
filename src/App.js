import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import SocMedia from "./components/SocMedia";
import projects from "./utils/projects.json";

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.setState({
      projects: projects,
    });
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div className="container container-fluid">
          <Route exact path="/" component={About} />
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          <Route
            path="/portfolio"
            render={() => <Portfolio projects={this.state.projects} />}
          />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <SocMedia />
          <br />
          <br />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
