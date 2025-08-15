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
          src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-2374-622f-9cfa-6f0eb02924b6/raw?se=2025-08-15T08%3A10%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=5948aa1a-2c5f-5d30-96c8-0ca9caec0a73&skoid=24a7dec3-38fc-4904-b888-8abe0855c442&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-15T01%3A46%3A57Z&ske=2025-08-16T01%3A46%3A57Z&sks=b&skv=2024-08-04&sig=DECnx09MvXUf1Fw5CruioZJO9T/pj7kdiNG/HEfW8Bk%3D"
          alt="Naet profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}
