import React from "react";
import Profile from "./components/profile";
import Header from "./components/Header";
import Studies from "./components/studies";
import Perpro from "./components/perpro";
import RecentWork from "./components/Recentwork";
import Contactform from "./components/ContactForm";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Studies />
      <Perpro />
      <RecentWork />\
      <Contactform />
    </div>
  );
}

export default App;
