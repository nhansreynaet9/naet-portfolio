import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <div className="hero-text">
        <h1 style={{ color: "white" }}>Nhan Sreyneat</h1>
        <p>
          I’m a versatile developer with hands-on experience in web and mobile
          application development. On the web side, I specialize in React JS,
          creating responsive, user-friendly interfaces with reusable
          components, REST API integration, and clean code architecture. My
          recent projects include a task management app using custom React hooks
          and a university scholarship/events platform with dynamic styling and
          component-based design.
        </p>
        <div className="hero-buttons">
          <button className="btn-dark">Start Now</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/Asset/image/naet.png"
          alt="Naet profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}
