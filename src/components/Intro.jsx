import React, { useEffect } from "react";
import Typed from "typed.js";

const Intro = () => {
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Competitive Programmer",
        "BlockChain Enthusiast",
        "Freelancer"
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
          I’m a web developer and here is my portfolio website. Here you’ll
          learn about me as a web developer.
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
