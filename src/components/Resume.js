import React from "react";
import ResumePNG from "../images/resume.png";
import ResumePDF from "../images/Alina_Gorelik_Resume.pdf";
import Header from "./Header";

function Resume() {
  return (
    <div className="container container-fluid">
      <div className="m-5 pt-5 pb-5">
        <div className="header">
          <Header title="Resume" />
        </div>
        <div className="resume">
          {/* <img src={ResumePNG} alt="resume" className="resumePNG mt-5"></img> */}
          <iframe align="center" className="iframe" src={ResumePDF} />
          <a href={ResumePDF} target="_blank">
            <h1 className="text-center mt-2">View Here</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
