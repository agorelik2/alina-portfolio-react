import React from "react";
import Header from "./Header";
import Alina_Photo from "../images/Alina_Photo.jpg";

function About() {
  return (
    <div className="container_about">
      <main>
        {/* <div className="container container-fluid"> */}
        <div className="m-5 pt-5 pb-5">
          {/* Display About Me page header */}
          <div className="header">
            <Header title="About Me" />
          </div>
          {/* <Display Photo and Text in the same row, making sure the text will be under photo on small screens */}
          <div className="row">
            <div className="col-sm-6 col-md-12">
              <img
                id="about-image"
                src={Alina_Photo}
                className="img-thumbnail float-left mr-3"
                alt="Alina Gorelik"
              />
              <p>
                I am a programmer, a mother of three young adults, and a
                life-long learner. My family, including my husband Leo, me, and
                our two-year old son Michael ("Misha"), immigrated to the US
                from Belarus in 1996 with very little English, no money, and
                huge hopes for a better life. Since then, I have strived to
                seize any opportunity to expand my knowledge and gain new
                skills. Just less than a year after immigration, I was able to
                find my first full time job as a computer programmer for a
                distribution company based in Milwaukee, WI.
              </p>
              <p>
                My first job helped me become a better programmer and team
                member, and my co-workers became a family. Together, we grew as
                programmers from Dibol to web developers utilizing JavaScript,
                ColdFusion, and ASP on everyday basis. Working as a team, we
                customized Microsoft Commerce Server and built a
                fully-functioning e-commerce website for our company.
              </p>
              <p>
                At the same time, my family grew as well: my husband and I had
                three beautiful children. When my family had to move to Michigan
                for my husband's job, my manager asked me to continue working
                for them from Michigan as an independent contractor. However,
                after six more years of telecommuting, I chose to devote my life
                to my children and all of their activities.
              </p>
              <p>
                This year is bittersweet because my youngest child graduated
                from high school and left for college. I thought that it would
                be a great time for me to return to what I liked the most: web
                development. In June, I enrolled in a full stack web development
                bootcamp at Michigan State University. I am currently learning
                the latest trends in web development including HTML5, CSS3,
                JQuery, Express.js, Node.js, React.Js utilizing MySQL and
                MongoDB. It is not easy to start learning again at 51, however,
                I am confident that I will overcome all the challenges, finish
                the course, and reclaim my career as a web developer.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}

export default About;
