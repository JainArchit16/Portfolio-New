import React, { useState, useEffect } from "react";

import Client from "./components/Client";
import WorkSection from "./components/WorkSection";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Typed from "typed.js";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import Education from "./components/Education";

export default function App() {
  const [navHidden, setNavHidden] = useState(true);

  const [loading, setLoading] = useState(true);

  const toggleNav = () => {
    setNavHidden(!navHidden);
    document.body.classList.toggle("lock-screen");
  };

  // useEffect(() => {
  //   document.body.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape" && navHidden == false) {
  //       console.log("hello");
  //       toggleNav();
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && navHidden === false) {
        toggleNav();
      }
    };

    document.body.addEventListener("keydown", handleEscape);

    return () => {
      document.body.removeEventListener("keydown", handleEscape);
    };
  }, [navHidden]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  console.log(loading);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
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
                  <a href="#" onClick={toggleNav}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#work" onClick={toggleNav}>
                    My Work
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#skills" onClick={toggleNav}>
                    My Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    data-focused="last-focused"
                    onClick={toggleNav}
                  >
                    Contact
                  </a>
                </li>
              </ol>
            </nav>

            <Intro />
          </header>

          <main>
            <Client />

            <Education />

            <WorkSection />

            <Skills />

            {/* <Testimonials /> */}

            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
