import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Recentwork.css";
import Mylogo from "./image/mylogo.png";
import Urecomlogo from "./image/urecomlogo3.png";

const RecentWork = () => {
  const works = [
    {
      img: Urecomlogo, // Use the imported image
      alt: "Urecom Logo",
      title: "URecomm",
      desc: "URecom is an all-in-one platform designed to help Cambodian students navigate their education and career journey with confidence. The app provides detailed recommendations about universities in Cambodia, including each university’s programs, location, events, and scholarship opportunities.",
    },
    {
      img: "https://assets.grok.com/users/d72d6e84-b6b9-4b70-8596-546ffec14e6c/generated/327be913-4e01-4de0-bb8f-16237d5cf70b/image.jpg", // replace with your image
      title: "Todo App",
      desc: "A responsive, full-stack To-Do web application built with React JS, featuring a clean and intuitive interface for managing daily tasks. The app integrates seamlessly with a Swagger-documented REST API to enable real-time task creation, editing, and deletion through GET, POST, PUT, and DELETE operations. Leveraging custom React hooks for state management and API communication, the project demonstrates modular component design, efficient data handling, and a user-focused experience.",
    },
  ];

  return (
    <section className="recent-work">
      <div className="container">
        {/* Title */}
        <h2 className="title">Recent Work</h2>
        <p className="subtitle">
          I've been refining my React JS project with proper structure, API
          hooks, and styling, while also managing GitHub workflow.
        </p>

        {/* Work Cards */}
        <div className="works-wrapper">
          <button className="arrow left">
            <FaArrowLeft />
          </button>

          {works.map((work, index) => (
            <div key={index} className="work-card">
              <img src={work.img} alt={work.title} />
              <h3>{work.title}</h3>
              <p>{work.desc}</p>
              <button className="know-more">Know more &gt;</button>
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
