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
          component-based design. On the mobile side, I’ve built Android
          applications in Android Studio using MVC architecture, integrating
          MySQL backends, and managing version control through GitHub. I’m
          passionate about turning ideas into fully functional, visually
          appealing digital solutions that deliver a smooth user experience
          across devices.
        </p>
        <div className="hero-buttons">
          <button className="btn-dark">Start Now</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/472553437_1344318720354264_4104280743607265264_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=A__ZzWxL8QoQ7kNvwEKMBq-&_nc_oc=AdnSEVPl8PYRGzyHveKyM0zH1vyxuu8IJNSUpfdZSBQ4LdeWgeZKrrBMLuUGlNMix-Y&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=knGWvO1YTjLv_3LXakiW7Q&oh=00_AfUnE9zw784UEx4CFfJExBWZvkPaGoJyzROclAodKmWdUA&oe=68A20334"
          alt="Naet profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}
