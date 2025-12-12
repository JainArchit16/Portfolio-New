import React, { useEffect, useState } from "react";
import githubLogo from "../assets/images/social-links/github.svg";
import codepenLogo from "../assets/images/social-links/codepen.svg";
import linkedinLogo from "../assets/images/social-links/linkedin.svg";
import twitterLogo from "../assets/images/social-links/twitter.svg";

const Footer = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme == "dark") {
      document.body.classList.remove("light");
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <nav>
            <ol className="footer-links">
              <li className="footer-link">
                <a
                  title="GitHub"
                  href="https://github.com/JainArchit16"
                  target="_blank"
                  rel="noopener"
                >
                  <img loading="lazy" src={githubLogo} alt="GitHub" />
                </a>
              </li>
              {/* <li className="footer-link">
                <a
                  title="Codepen"
                  href="https://github.com/JainArchit16"
                  target="_blank"
                  rel="noopener"
                >
                  <img loading="lazy" src={codepenLogo} alt="Codepen" />
                </a>
              </li> */}
              <li className="footer-link">
                <a
                  title="Linkedin"
                  href="https://www.linkedin.com/in/architjain16/"
                  target="_blank"
                  rel="noopener"
                >
                  <img loading="lazy" src={linkedinLogo} alt="Linkedin" />
                </a>
              </li>
            </ol>
          </nav>
          {/*  */}
          <label className="theme-switch" htmlFor="theme-switch">
            <span>Dark Theme</span>
            <input
              type="checkbox"
              id="theme-switch"
              role="switch"
              checked={theme === "dark"}
              onChange={switchTheme}
            />
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
