import React, { useEffect, useRef } from "react";
import gitHub from "../assets/images/social-links/github.svg";
import portfolioTemplateImg from "../assets/images/work/portfolio-template.webp";
import agencyElevationImg from "../assets/images/work/agency-elevation.webp";
import contributeDevImg from "../assets/images/work/contribute-dev.webp";

function WorkSection() {
  const workElsRef = useRef([]);
  const workImgsRef = useRef([]);

  useEffect(() => {
    // const workImgs = document.querySelectorAll(".work-img");

    const workImgs = workImgsRef.current;

    workImgs.forEach((workImg) => workImg.classList.add("transform"));

    // const workEls = document.querySelectorAll(".work-box");

    const workEls = workElsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const [textbox, picture] = Array.from(entry.target.children);
        if (entry.isIntersecting) {
          picture.classList.remove("transform");
          Array.from(textbox.children).forEach(
            (el) => (el.style.animationPlayState = "running")
          );
        }
      },
      { threshold: 0.4 }
    );

    workEls.forEach((workEl) => {
      observer.observe(workEl);
    });

    // console.log(workEls);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="work">
      <div className="container">
        <h2 className="h2" id="work">
          Selected Work
        </h2>
        <div className="work-boxes">
          <div className="work-box" ref={(el) => workElsRef.current.push(el)}>
            <div className="work-textbox">
              <h3 className="h3">portfolio template</h3>
              <p className="work-text">
                A free to use, minimal and accessible portfolio template for
                developers.
              </p>
              <ol className="work-technologies">
                <li>React</li>
                <li>Gatsby</li>
                <li>SCSS</li>
                <li>MDX</li>
              </ol>
              <div className="work-links">
                <a
                  href="https://github.com/devsyedmohsin"
                  target="_blank"
                  rel="noopener"
                  className="link"
                >
                  Explore this project
                </a>
                <a
                  href="https://github.com/devsyedmohsin"
                  target="_blank"
                  rel="noopener"
                  title="Source code"
                >
                  <img src={gitHub} alt="GitHub" loading="lazy" />
                </a>
              </div>
            </div>
            <picture
              className="work-img"
              ref={(el) => workImgsRef.current.push(el)}
            >
              <img
                loading="lazy"
                src={portfolioTemplateImg}
                alt="portfolio template"
              />
            </picture>
          </div>
          <div className="work-box" ref={(el) => workElsRef.current.push(el)}>
            <div className="work-textbox">
              <h3 className="h3">agencyelevation.com</h3>
              <p className="work-text">Website for Agency Elevation.</p>
              <ol className="work-technologies">
                <li>React</li>
                <li>Gatsby</li>
                <li>Material UI</li>
              </ol>
              <div className="work-links">
                <a href="#" target="_blank" rel="noopener" className="link">
                  Explore this project
                </a>
                <a
                  href="http://github.com/devsyedmohsin"
                  target="_blank"
                  rel="noopener"
                  title="Source code"
                >
                  <img src={gitHub} alt="GitHub" loading="lazy" />
                </a>
              </div>
            </div>
            <picture
              className="work-img"
              ref={(el) => workImgsRef.current.push(el)}
            >
              <img
                loading="lazy"
                src={agencyElevationImg}
                alt="agency elevation"
              />
            </picture>
          </div>
          <div className="work-box" ref={(el) => workElsRef.current.push(el)}>
            <div className="work-textbox">
              <h3 className="h3">contribute.dev</h3>
              <p className="work-text">
                Website for DevX A dedicated space for developer experience
              </p>
              <ol className="work-technologies">
                <li>Ruby</li>
                <li>SvelteKit</li>
                <li>Emotion</li>
              </ol>
              <div className="work-links">
                <a href="#" target="_blank" rel="noopener" className="link">
                  Explore this project
                </a>
                <a href="#" target="_blank" rel="noopener" title="Source code">
                  <img src={gitHub} alt="GitHub" loading="lazy" />
                </a>
              </div>
            </div>
            <picture
              className="work-img"
              ref={(el) => workImgsRef.current.push(el)}
            >
              <img loading="lazy" src={contributeDevImg} alt="contribute dev" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
