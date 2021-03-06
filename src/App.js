import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
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
      <HashRouter basename="/">
        <NavBar />
        <div className="container container-fluid">
          {/* <Switch> */}
          {/*<Route path="/alina-portfolio-react/" component={About} /> */}
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about" component={About} />
          {/* <Route component={About} /> */}
          <Route
            path="/portfolio"
            render={() => <Portfolio projects={this.state.projects} />}
          />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          {/*<Route>
              <About />
            </Route>*/}
          {/* </Switch> */}
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
export default App;
