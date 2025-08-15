import React from "react";
import Header from "./components/Header";
import Profile from "./components/profile";
import Studies from "./components/studies";
import Perpro from "./components/perpro";
import RecentWork from "./components/Recentwork";
import ContactForm from "./components/contactform";
import "./App.css"; // Import global styles

function App() {
  return (
    <div>
      <Header />

      {/* Other sections */}
      <section id="profile" className="section-padding">
        <Profile />
      </section>

      <section id="studies" className="section-padding">
        <Studies />
      </section>

      <section id="perpro" className="section-padding">
        <Perpro />
      </section>

      <section id="recentwork" className="section-padding">
        <RecentWork />
      </section>

      <section id="contact" className="section-padding">
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
