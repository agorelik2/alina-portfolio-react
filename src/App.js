import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router basename="/alina-portfolio-react">
        <NavBar />
        <div className="container container-fluid">
          <Switch>
            <Route exact path="/alina-portfolio-react" component={About} />
            <Route exact path="/">
              <About />
            </Route>
            {/* <Route component={About} /> */}
            <Route
              path="/portfolio"
              render={() => <Portfolio projects={this.state.projects} />}
            />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
