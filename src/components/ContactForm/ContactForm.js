import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
      <div className="contact-container">
        <h1> Connect With Me Here!</h1>

        <div className="input-section">
          <form onSubmit={handleSubmit} className="form-container">
            <div>
              <label htmlFor="name">Name: </label>
              <br />
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <br />
              <input type="text" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message: </label>
              <br />
              <textarea type="text" id="message" required />
            </div>
            <br />
            <button type="submit">{status}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
