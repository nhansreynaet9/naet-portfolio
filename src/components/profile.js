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
          src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-2374-622f-9cfa-6f0eb02924b6/raw?se=2025-08-15T07%3A07%3A13Z&sp=r&sv=2024-08-04&sr=b&scid=7624b7f4-23e6-5007-a30b-10594b337959&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T05%3A59%3A46Z&ske=2025-08-16T05%3A59%3A46Z&sks=b&skv=2024-08-04&sig=2LaS7GDzbAtWMuGVMgl82TicK9uEl8uRyvkqgSAnbIY%3D"
          alt="Naet profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}
