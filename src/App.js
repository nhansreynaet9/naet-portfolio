import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Profile from "./components/profile";
import Studies from "./components/studies";
import Perpro from "./components/perpro";
import RecentWork from "./components/Recentwork";
import ContactForm from "./components/contactform";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // run animation only once
    });
  }, []);

  return (
    <div>
      <Header data-aos="fade-down" />

      {/* Other sections */}
      <section id="profile" data-aos="fade-up">
        <Profile />
      </section>

      <section id="studies" data-aos="fade-right">
        <Studies />
      </section>

      <section id="perpro" data-aos="fade-left">
        <Perpro />
      </section>

      <section id="Recentwork" data-aos="zoom-in">
        <RecentWork />
      </section>

      <section id="contactform" data-aos="fade-up">
        <ContactForm />
      </section>

      <section id="Footer" data-aos="flip-up">
        <Footer />
      </section>
    </div>
  );
}

export default App;
