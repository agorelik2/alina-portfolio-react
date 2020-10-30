import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light nav-style">
      <div className="row justify-content-center">
        <div className="col-6 d-flex justify-content-center">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <h2 className="text-custom">Alina Gorelik</h2>
          </Link>
          {/* <a className="navbar-brand" href="index.html">
            <h2 className="text-custom">Alina Gorelik</h2>
          </a> */}
        </div>
        <div className="col-6 d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto justify-content-end">
              <li className="nav-item active portfolio-link">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
                {/* <a className="nav-link portfolio-link" href="index.html">
                  About
                </a> */}
              </li>
              <li className="nav-item portfolio-link">
                <Link
                  to="/portfolio"
                  className={
                    window.location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
                {/* <a
                  className="nav-link portfolio-link"
                  href="new_portfolio.html"
                >
                  Portfolio
                </a> */}
              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link portfolio-link"
                  href="assets/Alina_Gorelik_Resume.pdf"
                >
                  Resume
                </a> */}
              </li>
              <li className="nav-item portfolio-link">
                <Link
                  to="/contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
                {/* <a className="nav-link" href="contact.html">
                  Contact
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
