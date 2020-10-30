import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container-nav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Alina Gorelik
          </Link>
        </li>
        <li className="nav-item">
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
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={
              window.location.pathname === "/Portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
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
        </li>
        <li className="nav-item">
          <Link
            to="/contact/learn"
            className={
              window.location.pathname === "/resume"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
