import React from "react";

import cssImage from "../assets/images/skills/CSS.png";
import javascriptImage from "../assets/images/skills/Javascript.svg";
import expressImage from "../assets/images/skills/Express.png";

import tailwindImage from "../assets/images/skills/Tailwind.png";
import nodejsImage from "../assets/images/skills/NodeJs.svg";
import mongodbImage from "../assets/images/skills/MongoDB.svg";
import reduxImage from "../assets/images/skills/Redux.svg";
import vercelImage from "../assets/images/skills/Vercel.svg";

import htmlImage from "../assets/images/skills/HTML.png";

import reactImage from "../assets/images/skills/React.png";

import bootstrapImage from "../assets/images/skills/Bootstrap.svg";
import materialUIImage from "../assets/images/skills/MaterialUI.svg";
import gitImage from "../assets/images/skills/Git.svg";
import githubImage from "../assets/images/skills/Github.svg";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="h2" id="skills">
          My Toolkit
        </h2>
        <div className="skills-imgs">
          <img src={htmlImage} alt="" className="skills-img" loading="lazy" />
          <img src={cssImage} alt="" className="skills-img" loading="lazy" />
          <img
            src={javascriptImage}
            alt=""
            className="skills-img"
            loading="lazy"
          />
          <img src={reactImage} alt="" className="skills-img" loading="lazy" />
          <img src={nodejsImage} alt="" className="skills-img" loading="lazy" />

          <img src={reduxImage} alt="" className="skills-img" loading="lazy" />
          <img
            src={tailwindImage}
            alt=""
            className="skills-img"
            loading="lazy"
          />
          <img
            src={bootstrapImage}
            alt=""
            className="skills-img"
            loading="lazy"
          />
          <img
            src={materialUIImage}
            alt=""
            className="skills-img"
            loading="lazy"
          />
          <img
            src={expressImage}
            alt=""
            className="skills-img"
            loading="lazy"
          />
          <img src={gitImage} alt="" className="skills-img" loading="lazy" />
          <img src={githubImage} alt="" className="skills-img" loading="lazy" />

          <img
            src={mongodbImage}
            alt=""
            className="skills-img"
            loading="lazy"
          />
          <img src={vercelImage} alt="" className="skills-img" loading="lazy" />
          <img
            src="https://www.svgrepo.com/show/353735/firebase.svg"
            className="skills-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
