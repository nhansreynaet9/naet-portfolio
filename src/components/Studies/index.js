import React from "react";
import "./studies.css";

export default function Studies() {
  return (
    <>
      <section className="student">
        <div className="my-text">
          <h1 style={{ color: "black" }}>Case Studies</h1>
          <p>
            currently working on a few case studies to showcase my skills in
            frontend development. These studies will include detailed analyses
            of projects I've worked on, highlighting my problem-solving
            abilities.
          </p>
        </div>
      </section>

      <section className="work1">
        <div className="work-text">
          <h1 style={{ color: "black" }}>Recent Work</h1>
          <p>
            I have been involved in several projects that demonstrate my
            expertise in frontend development. These projects include web and
            mobile applications, API integrations, and database management.
          </p>
          <div className="my-buttons">
            <button className="btn-go">View case study</button>
          </div>
        </div>
        <div className="work-image">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.bvnCvsOxOfb7IjpjMV6wDgHaE7?pid=Api&P=0&h=180"
            alt="Recent work"
          />
        </div>
      </section>
      <section className="work3">
        <div className="my-worktext">
          <h1 style={{ color: "black" }}>Implementation Details</h1>
          <p>
            "Managing student event information was inefficient because updates
            were spread across multiple platforms. T he goal was to create a
            centralized, easy-to-use web app where students could view and
            manage events in real time."
          </p>
          <div className="my-button2">
            <button className="btn-go22">Learn More</button>
          </div>
        </div>
        <div className="next-image">
          <img
            src="https://www.vnmtsolutions.com/wp-content/uploads/2022/08/Detailed-NetSuite-Implementation-Guide-1.jpg"
            alt="Personal projects"
          />
        </div>
      </section>
    </>
  );
}
