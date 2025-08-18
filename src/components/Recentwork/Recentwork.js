import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Recentwork.css";

const RecentWork = () => {
  const works = [
    {
      img: "/Asset/image/newUR.jpg",
      alt: "Urecom Logo",
      title: "URecomm",
      desc: "URecom is an all-in-one platform designed to help Cambodian students navigate their education and career journey with confidence. The app provides detailed recommendations about universities in Cambodia, including each university’s programs, location, events, and scholarship opportunities.",
    },
    {
      img: "/Asset/image/todo.jpg", // ✅ local image from public folder
      alt: "TODO",
      title: "To-Do App",
      desc: "A responsive, full-stack To-Do web application built with React JS, featuring a clean and intuitive interface for managing daily tasks. The app integrates seamlessly with a Swagger-documented REST API to enable real-time task creation, editing, and deletion through GET, POST, PUT, and DELETE operations. Leveraging custom React hooks for state management and API communication, the project demonstrates modular component design, efficient data handling, and a user-focused experience.",
      link: "https://github.com/nhansreynaet9/todo-client",
    },
  ];

  return (
    <section id="Recentwork" className="RecentWork">
      <div className="container">
        {/* Title */}
        <h2 className="title">Recent Work</h2>
        <p className="subtitle">
          I've been refining my React JS projects with proper structure, API
          hooks, and styling, while also managing GitHub workflow.
        </p>

        {/* Work Cards */}
        <div className="works-wrapper">
          <button className="arrow left">
            <FaArrowLeft />
          </button>

          {works.map((work, index) => (
            <div key={index} className="work-card">
              {/* Image links to GitHub if available */}
              {work.link ? (
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <img src={work.img} alt={work.alt || work.title} />
                </a>
              ) : (
                <img src={work.img} alt={work.alt || work.title} />
              )}

              <h3>{work.title}</h3>
              <p>{work.desc}</p>

              {work.link && (
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <button className="know-more">Know more &gt;</button>
                </a>
              )}
            </div>
          ))}

          <button className="arrow right">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
