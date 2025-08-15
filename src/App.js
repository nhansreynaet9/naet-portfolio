import React from "react";
import Header from "./components/Header";
import Profile from "./components/profile";
import Studies from "./components/studies";
import Perpro from "./components/perpro";
import RecentWork from "./components/Recentwork";
import ContactForm from "./components/contactform";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />

      {/* Other sections */}
      <section id="profile">
        <Profile />
      </section>

      <section id="studies">
        <Studies />
      </section>

      <section id="perpro">
        <Perpro />
      </section>

      <section id="Recentwork">
        <RecentWork />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
