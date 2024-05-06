import React, { useEffect, useRef } from "react";
import gitHub from "../assets/images/social-links/github.svg";
import portfolioTemplateImg from "../assets/images/work/portfolio-template.png";
import agencyElevationImg from "../assets/images/work/agency-elevation.webp";

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
          Projects
        </h2>
        <div className="work-boxes">
          <div className="work-box" ref={(el) => workElsRef.current.push(el)}>
            <div className="work-textbox">
              <h3 className="h3">Study Notion</h3>
              <p className="work-text">
                It's a EdTech Platform which provide you with instructor as well
                as student functionality.
              </p>
              <ol className="work-technologies">
                <li>React</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>NodeJS</li>
              </ol>
              <div className="work-links">
                <a
                  href="https://github.com/JainArchit16/Ed-Tech"
                  target="_blank"
                  rel="noopener"
                  className="link"
                >
                  Explore this project
                </a>
                <a
                  href="https://github.com/JainArchit16/Ed-Tech"
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
              <h3 className="h3">SafePassage</h3>
              <p className="work-text">
                A platform to enhace highway security and provide instantaneous
                help in case of road accidents
              </p>
              <ol className="work-technologies">
                <li>React</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>NodeJS</li>
                <li>FireBase</li>
              </ol>
              <div className="work-links">
                <a
                  href="https://github.com/JainArchit16/SafePassageMain"
                  target="_blank"
                  rel="noopener"
                  className="link"
                >
                  Explore this project
                </a>
                <a
                  href="https://github.com/JainArchit16/SafePassageMain"
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
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
