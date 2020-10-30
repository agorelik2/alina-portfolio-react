import React from "react";

function Contact(props) {
  return (
    <div className="contact-info">
      <main>
        <div className="container container-fluid align-items-center">
          <div className="m-5 pt-5">
            {/* <!-- Display About Me page header --> */}
            <div className="page-header">
              <h2 className="blue-color">Contact Me</h2>
              <br />
            </div>
            <div className="container container-fluid">
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

          {/* <!-- Build the contact form --> */}
          <form className="m-5 pb-5 contact-form">
            <div className="form-group col-sm-9">
              <label for="formGroupNameInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupNameInput"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group col-sm-9">
              <label for="formGroupEmailInput">Email</label>
              <input
                type="text"
                className="form-control"
                id="formGroupEmailInput"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group col-sm-9">
              <label for="formGroupMessageArea">Message</label>
              <textarea
                className="form-control"
                id="formGroupMessageArea"
                rows="5"
              ></textarea>
            </div>
            {/* <!-- Add submit button --> */}
            <div className="container">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Contact;
