import React from "react";

function Project(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card">
        <img
          alt={props.name}
          src={props.image}
          className="card-img img-fluid p-2"
          style={{ height: 250 }}
        />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.project}</p>
          <a className="card-link" href={props.location}>
            Try it Live
          </a>
          <a className="card-link p-2" href={props.github}>
            Github <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
