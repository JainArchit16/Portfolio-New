import React, { useEffect, useRef } from "react";

// --- IMAGES ---
// Note: Please update these imports with the actual screenshots of your new projects!
import gitHubIcon from "../assets/images/social-links/github.svg";
import teachifyImg from "../assets/images/work/portfolio-template.png"; // Replaced StudyNotion
import nptelImg from "../assets/images/work/agency-elevation.png"; // Placeholder for Nptel Hub
import safePassageImg from "../assets/images/work/portfolio-template.png"; // Placeholder for SafePassage

const WorkSection = () => {
  const projectRefs = useRef([]);

  // --- DATA FROM RESUME ---
  const projects = [
    {
      id: 1,
      title: "Nptel Hub",
      category: "Analytics Platform",
      description:
        "Engineered a performance-analysis platform for NPTEL quizzes supporting 500+ active users. Implemented real-time analytics and detailed progress reports using a scalable relational database.",
      tech: ["Next.js", "PostgreSQL", "NextAuth.js", "TailwindCSS"],
      image: nptelImg,
      githubLink: "https://github.com/JainArchit16", // Update this
      liveLink: "#",
    },
    {
      id: 2,
      title: "Teachify",
      category: "EdTech Platform",
      description:
        "Architected a full-stack education platform enabling seamless instructor course creation and student enrollment. Integrated Razorpay for secure payments and JWT for session management.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Razorpay"],
      image: teachifyImg,
      githubLink: "https://github.com/JainArchit16/Ed-Tech",
      liveLink: "#",
    },
    {
      id: 3,
      title: "SafePassage",
      category: "Safety & Emergency",
      description:
        "A real-time platform designed to enhance highway security and provide instantaneous assistance in case of road accidents using geolocation services.",
      tech: ["React.js", "Firebase", "Google Maps API", "Geolocation"],
      image: safePassageImg,
      githubLink: "https://github.com/JainArchit16/SafePassageMain",
      liveLink: "https://github.com/JainArchit16/SafePassageMain",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when visible
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () =>
      projectRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="py-24" id="work">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          <span className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Featured Projects
          </span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              // Animation Base State: Invisible & shifted down
              className={`flex flex-col lg:flex-row gap-10 items-center opacity-0 translate-y-12 transition-all duration-1000 ease-out ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* --- IMAGE SECTION --- */}
              <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* --- TEXT SECTION --- */}
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-2">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold mb-4 ">{project.title}</h3>

                <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg mb-6 hover:border-blue-500/30 transition-colors">
                  <p className="leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack Badges */}
                <ul className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300"
                      // Using your theme variables so badges fit perfectly in Light & Dark mode
                      style={{
                        backgroundColor: "var(--bg-color-secondary)",
                        borderColor: "var(--border)",
                        color: "var(--sub)",
                      }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors hover:opacity-80"
                    // This ensures text is White in Dark Mode and Black in Light Mode
                    style={{ color: "var(--important)" }}
                  >
                    <img
                      src={gitHubIcon}
                      alt="Github"
                      className="w-6 h-6 transition-all duration-300"
                      // This flips the icon color automatically based on the theme
                      style={{ filter: "var(--icon-filter)" }}
                    />
                    <span className="font-medium">Source Code</span>
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Kept the gradient as it stands out in both themes, but ensured text is white
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
