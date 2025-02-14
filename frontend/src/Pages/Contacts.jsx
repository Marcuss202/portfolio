import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from '../components/Navbar.jsx'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../components/CSS/Contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cqrpk6v",
        "template_82zbbfl",
        formData,
        "dXbe9bJ5No2c4JpO8"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <>
        <Navbar />
        <div className="Contacts container text-center mt-5">
            <h2 className="mb-3">Get in Touch</h2>
            <p>Fill out the form below or reach out via social media!</p>

            <form className="contact-form mx-auto" onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control mb-3"
                />
                <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control mb-3"
                />
                <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control mb-3"
                rows="4"
                ></textarea>
                <button type="submit" className="btn mainButton w-100">Send Message</button>
            </form>

            {isSent && <p className="text-success mt-2">Message sent successfully!</p>}

            <div className="social-icons mt-4">
                <a href="mailto:markussozols25@gmail.com" className="me-3">
                <FaEnvelope size={30} />
                </a>
                <a href="https://github.com/Marcuss202" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaGithub size={30} />
                </a>
                <a href="https://linkedin.com/in/ozols-markuss" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    </>
  );
};

export default Contacts;
