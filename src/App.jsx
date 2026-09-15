import { useState } from "react";
import "./index.css";

const projects = [
  {
    number: "01",
    title: "Knee Osteoarthritis AI",
    category: "COMPUTER VISION / DEEP LEARNING",
    description:
      "A 5-class knee osteoarthritis severity classification system using an ensemble of deep learning models, with explainability and a full-stack clinical workflow.",
    tech: ["PyTorch", "YOLO", "CNN", "FastAPI", "Flutter"],
    metric: "70.83%",
    metricLabel: "Ensemble Accuracy",
  },
  {
    number: "02",
    title: "Real-Time Collaborative Editor",
    category: "SOFTWARE ENGINEERING",
    description:
      "A Google Docs-style collaborative editor allowing multiple users to edit the same document simultaneously through WebSocket-based real-time synchronization.",
    tech: ["Python", "FastAPI", "WebSockets", "React"],
    metric: "REAL-TIME",
    metricLabel: "Multi-user Sync",
  },
  {
    number: "03",
    title: "Competitor Strategy Tracker",
    category: "MACHINE LEARNING / NLP",
    description:
      "An e-commerce intelligence system for collecting competitor data and applying sentiment analysis and sales forecasting to support strategic decisions.",
    tech: ["Python", "BeautifulSoup", "ML", "NLP"],
    metric: "E2E",
    metricLabel: "Data Pipeline",
  },
  {
    number: "04",
    title: "Farmer Voice Assistant",
    category: "AI / ACCESSIBILITY",
    description:
      "A voice-based farming assistant providing multilingual guidance around weather, fertilizers and market prices through an accessible interface.",
    tech: ["Python", "Streamlit", "REST APIs", "TTS"],
    metric: "MULTI",
    metricLabel: "Language Support",
  },
];

const experiences = [
  {
    year: "2025",
    role: "Data Science Intern",
    company: "EtrainIndia × IBM",
    description:
      "Worked with Python and real datasets through IBM's Python for Data Science program, strengthening data analysis and visualization workflows.",
  },
  {
    year: "2025",
    role: "ML Project Intern",
    company: "Infosys Springboard",
    description:
      "Built an e-commerce competitor strategy tracker involving data collection, sentiment analysis and sales forecasting.",
  },
  {
    year: "2024",
    role: "AI Intern",
    company: "Edunet Foundation × IBM SkillsBuild × AICTE",
    description:
      "Developed an ML classifier for employee burnout prediction using feature engineering, analysis and visualization.",
  },
];

const skills = [
  "Python",
  "C",
  "PyTorch",
  "Scikit-learn",
  "YOLO",
  "CNN",
  "FastAPI",
  "React",
  "SQL",
  "MySQL",
  "AWS",
  "Git",
  "GitHub",
  "NLP",
  "Generative AI",
  "Data Science",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* Background effects */}
      <div className="noise"></div>
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <button className="logo" onClick={() => scrollTo("home")}>
          NK<span>.</span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("experience")}>Experience</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

        <a
          className="nav-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* HERO */}
      <main id="home" className="hero section">

        <div className="hero-left">
          <div className="status">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">NISMA KAUSER / 2026 GRADUATE</p>

          <h1>
            BUILDING
            <br />
            <span>INTELLIGENT</span>
            <br />
            SYSTEMS<span className="accent">.</span>
          </h1>

          <p className="hero-description">
            Computer Science & Engineering graduate specializing in
            Data Science & AI. I build practical AI/ML systems,
            software and data-driven solutions.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => scrollTo("projects")}
            >
              Explore My Work <span>↓</span>
            </button>

            <a
              className="secondary-btn"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume ↗
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="terminal">
            <div className="terminal-top">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>nisma@portfolio ~</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="purple">$</span> whoami
              </p>

              <p className="terminal-output">
                AI/ML Engineer
                <br />
                Software Developer
                <br />
                Data Science Enthusiast
              </p>

              <p>
                <span className="purple">$</span> status
              </p>

              <p className="terminal-output">
                <span className="green">●</span> available_for_work
              </p>

              <p>
                <span className="purple">$</span> skills --top
              </p>

              <p className="terminal-output">
                Python · PyTorch · FastAPI
                <br />
                SQL · YOLO · AWS
              </p>

              <span className="cursor">_</span>
            </div>
          </div>

          <div className="hero-stat">
            <strong>9.60</strong>
            <span>CGPA</span>
          </div>

          <div className="hero-stat second">
            <strong>200+</strong>
            <span>DSA SOLVED</span>
          </div>
        </div>
      </main>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>PYTHON</span>
          <span>PYTORCH</span>
          <span>COMPUTER VISION</span>
          <span>GENERATIVE AI</span>
          <span>FASTAPI</span>
          <span>DATA SCIENCE</span>
          <span>PYTHON</span>
          <span>PYTORCH</span>
          <span>COMPUTER VISION</span>
          <span>GENERATIVE AI</span>
          <span>FASTAPI</span>
          <span>DATA SCIENCE</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-label">
          <span>01</span>
          ABOUT
        </div>

        <div className="about-grid">
          <div>
            <h2>
              I like building
              <br />
              <span>things that work.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I'm Nisma, a Computer Science & Engineering graduate
              specializing in Data Science and Artificial Intelligence.
            </p>

            <p>
              My work sits at the intersection of machine learning,
              software engineering and real-world problem solving.
              I've built computer vision systems, real-time applications,
              NLP solutions and data-driven products.
            </p>

            <p>
              Currently looking for opportunities where I can learn,
              build and contribute to meaningful engineering problems.
            </p>

            <div className="about-facts">
              <div>
                <strong>2026</strong>
                <span>Graduate</span>
              </div>

              <div>
                <strong>9.60</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>5★</strong>
                <span>SQL</span>
              </div>

              <div>
                <strong>200+</strong>
                <span>Problems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section id="projects" className="section projects-section">
        <div className="section-label">
          <span>02</span>
          SELECTED WORK
        </div>

        <div className="featured-project">
          <div className="featured-top">
            <span>FEATURED PROJECT / 01</span>
            <span>AI · COMPUTER VISION</span>
          </div>

          <div className="featured-content">
            <div>
              <h2>
                Knee
                <br />
                <span>Osteoarthritis</span>
                <br />
                AI
              </h2>

              <p>
                A deep learning system for predicting and classifying
                knee osteoarthritis severity across KL Grades 0–4.
              </p>

              <div className="tech-list">
                <span>PYTORCH</span>
                <span>YOLO</span>
                <span>EFFICIENET</span>
                <span>FASTAPI</span>
                <span>FLUTTER</span>
              </div>
            </div>

            <div className="model-card">
              <div className="model-header">
                <span>MODEL PERFORMANCE</span>
                <span>01</span>
              </div>

              <div className="big-metric">
                <strong>70.83%</strong>
                <span>ENSEMBLE ACCURACY</span>
              </div>

              <div className="metric-row">
                <span>Macro F1</span>
                <strong>0.7344</strong>
              </div>

              <div className="metric-row">
                <span>Classes</span>
                <strong>05</strong>
              </div>

              <div className="model-stack">
                <div>EfficientNet-B5</div>
                <div>EfficientNet-V2-S</div>
                <div>DenseNet-201</div>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div className="project-grid">
          {projects.slice(1).map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-bottom">
                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-metric">
                  <strong>{project.metric}</strong>
                  <small>{project.metricLabel}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-label">
          <span>03</span>
          EXPERIENCE
        </div>

        <div className="experience-heading">
          <h2>
            Where I've
            <br />
            <span>learned by building.</span>
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <div className="timeline-item" key={item.company}>
              <div className="timeline-year">{item.year}</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-label">
          <span>04</span>
          TOOLKIT
        </div>

        <div className="skills-layout">
          <div>
            <h2>
              Tools I use
              <br />
              to turn <span>ideas</span>
              <br />
              into reality.
            </h2>
          </div>

          <div className="skills-cloud">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={index % 5 === 0 ? "highlight-skill" : ""}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION / RESEARCH */}
      <section className="section education-section">
        <div className="section-label">
          <span>05</span>
          EDUCATION & RESEARCH
        </div>

        <div className="education-card">
          <div className="education-year">2022 — 2026</div>

          <div>
            <h2>Integral University</h2>
            <p>
              Bachelor of Technology · Computer Science &
              Engineering
            </p>
            <p>
              Specialization in Data Science & AI with IBM
            </p>
          </div>

          <div className="education-cgpa">
            <strong>9.60</strong>
            <span>CGPA</span>
          </div>
        </div>

        <div className="research-card">
          <div>
            <span className="research-tag">RESEARCH / COMPUTER VISION</span>

            <h2>
              AI-Assisted Early Prediction and Severity
              Classification of Knee Osteoarthritis
            </h2>

            <p>
              Research-focused final year work combining deep
              learning models, ensemble classification and
              explainability for knee OA severity assessment.
            </p>
          </div>

          <div className="research-arrow">↗</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-small">06 / LET'S CONNECT</div>

        <h2>
          HAVE A PROBLEM
          <br />
          WORTH <span>SOLVING?</span>
        </h2>

        <p>
          I'm currently exploring AI/ML and Software Engineering
          opportunities. Let's build something useful.
        </p>

        <a
          className="email-link"
          href="mailto:nismakauser@gmail.com"
        >
          nismakauser@gmail.com ↗
        </a>

        <div className="social-links">
          <a
            href="https://github.com/NismaK"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/nisma-kauser-b76b09316"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2026 NISMA KAUSER</span>
        <span>BUILT WITH CURIOSITY + CODE</span>
        <span>AI · SOFTWARE · DATA</span>
      </footer>
    </div>
  );
}

export default App;
