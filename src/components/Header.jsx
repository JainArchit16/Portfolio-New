import React from "react";

const Header = () => {
  return (
    <header class="header">
      <div class="menu-btn-container">
        <div class="container">
          <button type="button" class="menu-btn">
            Menu
          </button>
        </div>
      </div>

      <nav class="nav hidden">
        <ol class="nav-items">
          <li class="nav-item">
            <a href="#">Home</a>
          </li>
          <li class="nav-item">
            <a href="#work">My Work</a>
          </li>
          <li class="nav-item">
            <a href="#blog">See Blog</a>
          </li>
          <li class="nav-item">
            <a href="#skills">My Skills</a>
          </li>
          <li class="nav-item">
            <a href="#contact" data-focused="last-focused">
              Contact
            </a>
          </li>
        </ol>
      </nav>

      <div class="container">
        <div class="header-textbox">
          <h1 class="h1">
            <span>Hi, I'm Syed Mohsin</span>
            <span>Frontend Web Developer</span>
          </h1>

          <p class="header-text">
            A frontend software engineer and interface designer who builds UX
            rich accessible and performant websites.
          </p>

          <div class="header-btns">
            <a href="#contact" class="btn btn-cta">
              Hire me
            </a>
            <a href="#work" class="btn btn-secondary">
              See my work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
