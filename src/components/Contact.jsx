import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toId = toast.loading("Sending");
    try {
      const response = await fetch(
        "https://portfolio-fv8y.onrender.com/api/v1/mail/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      toast.dismiss(toId);
      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(toId);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="h2" id="contact">
          Send Message
        </h2>
        <div className="contact-content">
          <div className="contact-textbox">
            {/* Please comment this component if you're not available for hire */}
            {/* <strong href="#" className="hire-alert">
              <span className="indicator"></span>
              Available for hire
            </strong> */}
            <p className="contact-text">
              As a Web Developer, I construct web interfaces and design systems
              with a special love for accessibility and the performance. I tend
              to code things from scratch and enjoy bringing ideas to life.
            </p>
            <p className="contact-text">
              I'm also an Competitive Programmer, and in my spare time, I tend
              to learn new things.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                id="name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={formData.email}
                onChange={handleChange}
                id="email"
                required
                inputMode="email"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">How can I help you?</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-cta">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
