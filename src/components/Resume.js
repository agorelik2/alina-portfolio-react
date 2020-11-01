import React from "react";
import ResumePNG from "../images/resume.png";
import ResumePDF from "../images/Alina_Gorelik_Resume.pdf";

function Resume() {
  return (
    <div className="container">
      <div className="resume">
        <img src={ResumePNG} alt="resume" className="resumePNG mt-5"></img>
        <a href={ResumePDF} target="_blank">
          <h1 className="text-center mt-2">View Here</h1>
        </a>
      </div>
    </div>
  );
}

export default Resume;
