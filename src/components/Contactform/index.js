import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>
       Let’s connect! Whether it’s a project, a job opportunity, or just a chat about tech, I’m happy to hear from you.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mobile</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit &gt;</button>
      </form>
    </div>
  );
}
