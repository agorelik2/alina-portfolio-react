import React from "react";
import Header from "./Header";

function Contact(props) {
  return (
    <div className="contact-info">
      <main>
        <div className="container container-fluid align-items-center">
          <div className="m-5 pt-5">
            <div className="header">
              <Header title="Contact Me" />
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
        </div>
      </main>
    </div>
  );
}
export default Contact;
