import React from "react";
import Header from "./Header";
import Project from "./Project";
// import projects from "../utils/projects.json";

function Portfolio(props) {
  console.log(props);
  return (
    <div className="portfolio-container">
      <div className="m-5 pt-5 pb-5">
        <div className="header">
          <Header title="My Projects" />
        </div>
        <div className="row">
          {props.projects.map((project, index) => {
            return (
              <Project
                key={index}
                name={project.name}
                image={project.image}
                project={project.project}
                location={project.location}
                github={project.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
