import React from "react";

function Project(props) {
  return (
    <div className="card port-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Project:</strong> {props.project}
          </li>
          <li>
            <strong>Demo:</strong> {props.location}
          </li>
          <li>
            <strong>Github:</strong> {props.github}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
