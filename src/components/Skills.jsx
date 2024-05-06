import React from "react";
import reactImg from "../assets/images/skills/react.webp";
import svelteImg from "../assets/images/skills/svelte.webp";
import typescriptImg from "../assets/images/skills/typescript.webp";
import accessibilityImg from "../assets/images/skills/a11y.webp";
import shellImg from "../assets/images/skills/shell.webp";
import nextJsImg from "../assets/images/skills/next-js.webp";
import graphqlImg from "../assets/images/skills/graphql.webp";
import gitImg from "../assets/images/skills/git.webp";
import cssImg from "../assets/images/skills/html.webp";
import jsImg from "../assets/images/skills/js.webp";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="h2" id="skills">
          My Toolkit
        </h2>
        <div className="skills-imgs">
          <img
            src={reactImg}
            alt="React"
            className="skills-img"
            loading="lazy"
            title="React"
          />
          <img
            src={svelteImg}
            alt="Svelte"
            className="skills-img"
            loading="lazy"
            title="Svelte"
          />
          <img
            src={typescriptImg}
            alt="Typescript"
            className="skills-img"
            loading="lazy"
            title="Typescript"
          />
          <img
            src={accessibilityImg}
            alt="Accessibility"
            className="skills-img"
            loading="lazy"
            title="Web Accessibility"
          />
          <img
            src={shellImg}
            alt="Shell"
            className="skills-img"
            loading="lazy"
            title="Shell"
          />
          <img
            src={nextJsImg}
            alt="NextJS"
            className="skills-img"
            loading="lazy"
            title="NextJS"
          />
          <img
            src={graphqlImg}
            alt="Graph Ql"
            className="skills-img"
            loading="lazy"
            title="Graph QL"
          />
          <img
            src={gitImg}
            alt="Git"
            className="skills-img"
            loading="lazy"
            title="Git"
          />
          <img
            src={cssImg}
            alt="CSS"
            className="skills-img"
            loading="lazy"
            title="CSS"
          />
          <img
            src={jsImg}
            alt="JavaScript"
            className="skills-img"
            loading="lazy"
            title="JavaScript"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
