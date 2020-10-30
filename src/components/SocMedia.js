import React from "react";

function SocMedia(props) {
  return (
    <div id="social-media" className="container-fluid justify-content-start">
      <div className="container">
        <div className="row">
          <a href="https://www.linkedin.com/in/alina-gorelik-1a2489a0/">
            <div className="col-3 media_link btn">
              <div className="row">
                <div className="col-6 d-flex justify-content-start">
                  <h3 className="m-0">LinkedIn</h3>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <i className="fab fa-linkedin-in fa-2x text-secondary"></i>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/agorelik2">
            <div
              className="col-3 media_link btn"
              href="https://github.com/agorelik2"
            >
              <div className="row">
                <div className="col-6 d-flex justify-content-start">
                  <h3 className="m-0">GitHub</h3>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <i className="fab fa-github fa-2x text-secondary"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocMedia;
