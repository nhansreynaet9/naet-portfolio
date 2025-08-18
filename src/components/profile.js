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
          src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-2374-622f-9cfa-6f0eb02924b6/raw?se=2025-08-18T02%3A00%3A29Z&sp=r&sv=2024-08-04&sr=b&scid=2c330278-74c7-5973-a99b-5f013b816e33&skoid=02b7f7b5-29f8-416a-aeb6-99464748559d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-17T22%3A45%3A05Z&ske=2025-08-18T22%3A45%3A05Z&sks=b&skv=2024-08-04&sig=YVwoVtRONIXkIX1hYD2Aax3OAAeOPqYV9gx1oAsJ9O4%3D"
          alt="Naet profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}
