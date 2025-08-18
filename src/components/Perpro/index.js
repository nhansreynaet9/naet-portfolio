import React from "react";
import "./perpro.css";

const projects = [
  {
    text: "Developed using Java/Kotlin with an MVC architecture. Features include UI screens, user interactions, and data handling. Integrated with a local database or API for storing and retrieving data. Practiced Android Studio layouts, activities/fragments, and lifecycle management.",
    name: "Android App Project (Android Studio)",
    img: "https://i.pinimg.com/1200x/57/74/4b/57744b4ad4ab080b9c52c842f7bbebe7.jpg",
  },
  {
    text: "Using figma to design a user-friendly interface for an App. The design includes interactive elements, responsive layouts, and a consistent color scheme.",
    name: "UX/UI Design Project",
    img: "https://i.pinimg.com/736x/45/2f/76/452f76999e0961df3e7d28ac5bc16211.jpg",
    link: "https://www.figma.com/design/YEsQv2wpTVPZg95Tdl8QT3/urecom?node-id=7-2&t=jgs9iwMg9GeRWB8c-1", // <- Your Figma link here
  },
  {
    text: "Created a MySQL database schema with ERD diagrams. Sample data, normalization steps, and SQL scripts. Prepared for integration with VS Code and possible web frontend.",
    name: "MySQL Database Project",
    img: "https://i.pinimg.com/736x/a1/8c/a8/a18ca8442f7fc51833a6947ebb14b2af.jpg",
  },
  {
    text: "Developed a React web application with a focus on responsive design and user experience. The project includes components, state management, and API integration.",
    name: "React Web App Project",
    img: "https://i.pinimg.com/736x/fc/97/4f/fc974f1f07303a84467b37e0da647ff7.jpg",
  },
];

export default function Perpro() {
  return (
    <section className="perpros">
      <h2>Personal Projects</h2>
      <p className="myperpro-text">
        What I have been working on recently. These projects showcase my skills
        in frontend development, including React applications, API integrations,
        and database management.
      </p>

      <div className="testimonial-grid">
        {projects.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <span className="quote">“</span>
            <p className="testimonial-text">{t.text}</p>
            <div className="client-info">
              <img src={t.img} alt={t.name} />
              {t.link ? (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {t.name}
                </a>
              ) : (
                <h4>{t.name}</h4>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
