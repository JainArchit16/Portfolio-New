import React, { useState, useEffect, useRef } from "react";

import stripeLogo from "./assets/images/trusted-by/stripe.svg";
import datastaxLogo from "./assets/images/trusted-by/datastax.svg";
import cokeLogo from "./assets/images/trusted-by/coke.svg";
import gmLogo from "./assets/images/trusted-by/gm.svg";
import sharesLogo from "./assets/images/trusted-by/shares.svg";
import shopifyLogo from "./assets/images/trusted-by/shopify.svg";
import agencyElevationLogo from "./assets/images/trusted-by/agency-elevation.svg";
import gitlabLogo from "./assets/images/trusted-by/gitlab.svg";
import duolingoLogo from "./assets/images/trusted-by/duolingo.svg";
import coyoteLogo from "./assets/images/trusted-by/coyote.svg";
import astratoLogo from "./assets/images/trusted-by/astrato.svg";
import mercadoLogo from "./assets/images/trusted-by/mercado.svg";

import portfolioTemplateImg from "./assets/images/work/portfolio-template.webp";
import agencyElevationImg from "./assets/images/work/agency-elevation.webp";
import contributeDevImg from "./assets/images/work/contribute-dev.webp";

import gitHub from "./assets/images/social-links/github.svg";

import reactImg from "./assets/images/skills/react.webp";
import svelteImg from "./assets/images/skills/svelte.webp";
import typescriptImg from "./assets/images/skills/typescript.webp";
import accessibilityImg from "./assets/images/skills/a11y.webp";
import shellImg from "./assets/images/skills/shell.webp";
import nextJsImg from "./assets/images/skills/next-js.webp";
import graphqlImg from "./assets/images/skills/graphql.webp";
import gitImg from "./assets/images/skills/git.webp";
import cssImg from "./assets/images/skills/html.webp";
import jsImg from "./assets/images/skills/js.webp";

import richHarrisImage from "./assets/images/testimonials/rich-harris.png";
import frankMeadImage from "./assets/images/testimonials/frank-mcsherry.webp";
import brianHirshImage from "./assets/images/testimonials/brian-hirsh.png";
import adamImage from "./assets/images/testimonials/adam.png";
import valHeadImage from "./assets/images/testimonials/val-head.png";
import timSatterwhiteImage from "./assets/images/testimonials/tim-satterwhite.webp";

import githubLogo from "./assets/images/social-links/github.svg";
import codepenLogo from "./assets/images/social-links/codepen.svg";
import linkedinLogo from "./assets/images/social-links/linkedin.svg";
import twitterLogo from "./assets/images/social-links/twitter.svg";

import Client from "./components/Client";
import WorkSection from "./components/WorkSection";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [navHidden, setNavHidden] = useState(true);
  // const [theme, setTheme] = useState(
  //   () => localStorage.getItem("theme") || "dark"
  // );

  const toggleNav = () => {
    setNavHidden(!navHidden);
    document.body.classList.toggle("lock-screen");
  };

  const workElsRef = useRef([]);
  const workImgsRef = useRef([]);

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
              <span>Hi, I'm Syed Mohsin</span>
              <span>Frontend Web Developer</span>
            </h1>
            <p className="header-text">
              A frontend software engineer and interface designer who builds UX
              rich accessible and performant websites.
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
