import React from "react";
import Header from "./Header";
import Project from "./Project";
import projects from "../utils/projects.json";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="m-5 pt-5 pb-5">
        <div className="header">
          <Header title="My Projects" />
        </div>
        <div className="row">
          <Project
            name={projects[0].name}
            image={projects[0].image}
            project={projects[0].project}
            location={projects[0].location}
            github={projects[0].github}
          />
          <Project
            name={projects[1].name}
            image={projects[1].image}
            project={projects[1].project}
            location={projects[1].location}
            github={projects[1].github}
          />
          <Project
            name={projects[2].name}
            image={projects[2].image}
            project={projects[2].project}
            location={projects[2].location}
            github={projects[2].github}
          />
        </div>
        <div className="row">
          <Project
            name={projects[3].name}
            image={projects[3].image}
            project={projects[3].project}
            location={projects[3].location}
            github={projects[3].github}
          />
          <Project
            name={projects[4].name}
            image={projects[4].image}
            project={projects[4].project}
            location={projects[4].location}
            github={projects[4].github}
          />
          <Project
            name={projects[5].name}
            image={projects[5].image}
            project={projects[5].project}
            location={projects[5].location}
            github={projects[5].github}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
