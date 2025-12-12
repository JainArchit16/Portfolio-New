import React from "react";

// Languages
import cImage from "../assets/images/skills/C.png"; // New
import cppImage from "../assets/images/skills/CPP.png"; // New
import pythonImage from "../assets/images/skills/Python.png"; // New
import kotlinImage from "../assets/images/skills/Kotlin.png"; // New
import htmlImage from "../assets/images/skills/HTML.png";
import cssImage from "../assets/images/skills/CSS.png";
import javascriptImage from "../assets/images/skills/Javascript.svg";

// Frameworks & Libraries
import reactImage from "../assets/images/skills/React.png";
import nextjsImage from "../assets/images/skills/NextJsCircle.png"; // New (Important!)
import nodejsImage from "../assets/images/skills/NodeJs.svg";
import expressImage from "../assets/images/skills/Express.png";
import reduxImage from "../assets/images/skills/Redux.svg";
import tailwindImage from "../assets/images/skills/Tailwind.png";
import viteImage from "../assets/images/skills/Vite.png"; // New

// Database
import mongodbImage from "../assets/images/skills/MongoDB.svg";
import postgresImage from "../assets/images/skills/PostgreSQL.png"; // New
import sqlImage from "../assets/images/skills/SQL.svg"; // New
import firebaseImage from "../assets/images/skills/Firebase.svg"; // Replaced URL with local consistent naming if you prefer

// DevOps & Deployment
import dockerImage from "../assets/images/skills/Docker.svg"; // New (Very important for you)
import jenkinsImage from "../assets/images/skills/Jenkins.png"; // New (Matches your Winzo exp)
import vercelImage from "../assets/images/skills/Vercel.svg";
import netlifyImage from "../assets/images/skills/Netlify.png"; // New
// import renderImage from "../assets/images/skills/Render.svg"; // New
import gitImage from "../assets/images/skills/Git.svg";
import githubImage from "../assets/images/skills/Github.svg";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          id="skills"
        >
          My Toolkit
        </h2>
        <div className="skills-imgs">
          {/* Languages */}
          <img src={cImage} alt="C" className="skills-img" loading="lazy" />
          <img src={cppImage} alt="C++" className="skills-img" loading="lazy" />
          <img
            src={pythonImage}
            alt="Python"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={kotlinImage}
            alt="Kotlin"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={htmlImage}
            alt="HTML"
            className="skills-img"
            loading="lazy"
          />
          <img src={cssImage} alt="CSS" className="skills-img" loading="lazy" />
          <img
            src={javascriptImage}
            alt="JavaScript"
            className="skills-img"
            loading="lazy"
          />

          {/* Frameworks */}
          <img
            src={reactImage}
            alt="React"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={nextjsImage}
            alt="Next.js"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={nodejsImage}
            alt="Node.js"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={expressImage}
            alt="Express"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={reduxImage}
            alt="Redux"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={tailwindImage}
            alt="Tailwind CSS"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={viteImage}
            alt="Vite"
            className="skills-img"
            loading="lazy"
          />

          {/* Databases */}
          <img
            src={mongodbImage}
            alt="MongoDB"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={postgresImage}
            alt="PostgreSQL"
            className="skills-img"
            loading="lazy"
          />
          <img src={sqlImage} alt="SQL" className="skills-img" loading="lazy" />
          {/* Using the URL you had or a local file */}
          <img
            src="https://www.svgrepo.com/show/353735/firebase.svg"
            alt="Firebase"
            className="skills-img"
            loading="lazy"
          />

          {/* DevOps & Tools */}
          <img
            src={dockerImage}
            alt="Docker"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={jenkinsImage}
            alt="Jenkins"
            className="skills-img"
            loading="lazy"
          />
          <img src={gitImage} alt="Git" className="skills-img" loading="lazy" />
          <img
            src={githubImage}
            alt="GitHub"
            className="skills-img"
            loading="lazy"
          />

          {/* Deployments */}
          <img
            src={vercelImage}
            alt="Vercel"
            className="skills-img"
            loading="lazy"
          />
          <img
            src={netlifyImage}
            alt="Netlify"
            className="skills-img"
            loading="lazy"
          />
          {/* <img
            src={renderImage}
            alt="Render"
            className="skills-img"
            loading="lazy"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
