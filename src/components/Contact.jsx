import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="h2" id="contact">
          Send Message
        </h2>
        <div className="contact-content">
          <div className="contact-textbox">
            {/* Please comment this component if you're not available for hire */}
            <strong href="#" className="hire-alert">
              <span className="indicator"></span>
              Available for hire
            </strong>
            <p className="contact-text">
              As a software engineer, I construct web interfaces and design
              systems with a special love for accessibility and the performance.
              I tend to code things from scratch and enjoy bringing ideas to
              life.
            </p>
            <p className="contact-text">
              I'm also an open-source developer, and in my spare time, I do
              digital art with my iPad Pro.
            </p>
            {/* Replace src with your signatures and name */}
            <img
              src="assets/images/signatures.png"
              alt="Syed Mohsin"
              className="signatures"
              loading="lazy"
            />
          </div>
          <form action="#" className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                inputMode="email"
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">How can I help you?</label>
              <textarea name="message" id="message" required></textarea>
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
