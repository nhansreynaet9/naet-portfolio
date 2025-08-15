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
          src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/482323038_1388809562571846_5658751458333077777_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=enNbeBwamTQQ7kNvwEITGdj&_nc_oc=AdmBBjkfttGoRqJxJs-dOqlC1eTHFPiwqtqLGL3TsIXiSrFbUqME-AbhVOOmbIauZ6I&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=_qEx1gQCd_96FKqUbbJVkQ&oh=00_AfVWqdr4g9D5yxpvJiNPBJE9IZpDI4KDOKNr28tXzs_kfw&oe=68A495BE"
          alt="Naet profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}
