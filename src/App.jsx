import React, { useState, useEffect } from "react";

import Client from "./components/Client";
import WorkSection from "./components/WorkSection";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Type from "typed-js";
import Typed from "typed.js";

export default function App() {
  const [navHidden, setNavHidden] = useState(true);

  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Competitive Programmer",
        "BlockChain Enthusiast",
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

  const toggleNav = () => {
    setNavHidden(!navHidden);
    document.body.classList.toggle("lock-screen");
  };

  useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navHidden == false) {
        toggleNav();
      }
    });
  }, []);

  return (
    <div>
      <header className="header">
        <div className="menu-btn-container">
          <div className="container">
            <button type="button" className="menu-btn" onClick={toggleNav}>
              {navHidden ? "menu" : "close"}
            </button>
          </div>
        </div>

        <nav className={`nav ${navHidden ? "hidden" : ""}`}>
          <ol className="nav-items">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#work">My Work</a>
            </li>
            <li className="nav-item">
              <a href="#blog">See Blog</a>
            </li>
            <li className="nav-item">
              <a href="#skills">My Skills</a>
            </li>
            <li className="nav-item">
              <a href="#contact" data-focused="last-focused">
                Contact
              </a>
            </li>
          </ol>
        </nav>

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
      </header>

      <main>
        <Client />

        <WorkSection />

        <Skills />

        <Testimonials />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
