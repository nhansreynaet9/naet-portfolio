import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Studies from "./components/Studies";
import Perpro from "./components/Perpro";
import RecentWork from "./components/Recentwork/Recentwork";
import ContactForm from "./components/Contactform";
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
      <section id="Profile" data-aos="fade-up">
        <Profile />
      </section>

      <section id="Studies" data-aos="fade-right">
        <Studies />
      </section>

      <section id="Perpro" data-aos="fade-left">
        <Perpro />
      </section>

      <section id="Recentwork" data-aos="fade-right">
        <RecentWork />
      </section>

      <section id="contactform" data-aos="fade-down">
        <ContactForm />
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
