import React, { useEffect } from "react";
import Typed from "typed.js";

const Intro = () => {
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Competitive Programmer",
        "AI Reseacher",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 75,
      backDelay: 1500,
    });

    return () => {
      typeData.destroy();
    };
  }, []);
  return (
    <div className="container">
      <div className="header-textbox">
        <h1 className="h1">
          <span>Hi, I'm Archit Jain</span>
          <div className="flex flex-row">
            <span className="role"></span>
          </div>
        </h1>
        <p className="header-text">
          I’m a Software Engineer passionate about building scalable web
          applications and optimizing complex systems.
        </p>
        <div className="header-btns">
          <a href="#contact" className="btn btn-cta">
            Hire me
          </a>
          <a href="#work" className="btn btn-secondary">
            See my work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
