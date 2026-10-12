import React, { useEffect, useState } from "react";

import {

  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,

  Code2, Sparkles, ExternalLink, MapPin, BriefcaseBusiness, BrainCircuit

} from "lucide-react";



const profile = {

  name: "Sanika Deokar",

  email: "deokarsanika814@gmail.com",

  github: "https://github.com/SanikaDeokar09",

  linkedin: "https://www.linkedin.com/in/sanika-deokar-0a8690291/",

  location: "Pune, Maharashtra, India",

};



const projects = [
  {
    number: "01",
    name: "ProdEase",
    category: "PRODUCTIVITY · ANALYTICS",
    description:
      "A productivity-tracking application with daily task monitoring, productivity metrics, and visual summaries of task completion and work patterns.",
    stack: ["Python", "Flask", "Analytics", "Charts"],
    github: "https://github.com/SanikaDeokar09/prodease",
    demo: "https://prodease-productivity-stress-main.vercel.app/",
    status: "Live Demo",
    style: "blue",
  },
  {
    number: "02",
    name: "ResolveAI",
    category: "AI WORKFLOW · PYTHON",
    description:
      "A stateful refund-resolution workflow for order verification, refund eligibility, fraud-risk assessment, and human review.",
    stack: ["Python", "LangGraph", "Streamlit", "SQLite", "Pytest"],
    github: "https://github.com/SanikaDeokar09/ResolveAi",
    demo: "https://resolveai-tt96mbmk9yb7qq2tc2tset.streamlit.app/",
    status: "Live Demo",
    style: "blue",
  },
  {
    number: "03",
    name: "Tripora",
    category: "FULL STACK · TRAVEL",
    description:
      "Discover destinations, organize travel plans, and build toward personalized AI-powered itineraries through a modern full-stack web application.",
    stack: ["React", "Python", "REST APIs"],
    github: "https://github.com/deokarsrushti9/Ai-travel",
    status: "View on GitHub",
    style: "lavender",
  },
  {
    number: "04",
    name: "AI Resume Analyzer",
    category: "AI · NLP",
    description:
      "An AI-powered resume intelligence platform focused on resume parsing, semantic job matching, ATS compatibility, and actionable improvement suggestions.",
    stack: ["Python", "NLP", "Semantic Search", "React"],
    github: "https://github.com/SanikaDeokar09/Ai-resume-analyser",
    status: "View on GitHub",
    style: "blue",
  },
  {
    number: "05",
    name: "AI Cyber Threat Detection & Incident Management",
    category: "AI · CYBERSECURITY",
    description:
      "An ongoing project exploring AI-assisted threat detection, incident analysis, and intelligent security workflows.",
    stack: ["AI Agents", "RAG", "Knowledge Graphs"],
    github: "",
    status: "Ongoing",
    style: "lavender",
  },
];



const skillGroups = [

  { title: "Programming", items: "Python, Java, C++, JavaScript, SQL" },

  { title: "Frontend", items: "React, HTML5, CSS3, Bootstrap" },

  { title: "Backend & APIs", items: "REST APIs, FastAPI, Node.js, Express.js" },

  { title: "AI & Data", items: "LLMs, RAG, NLP, Vector Embeddings, Pandas, NumPy, Scikit-learn" },

  { title: "Databases", items: "MySQL, MongoDB, SQLite" },

  { title: "Tools & Testing", items: "Git, GitHub, VS Code, Postman, Ollama, Pytest" }

];



function SectionIntro({ label, title, detail }) {

  return <div className="section-intro reveal">

    <p className="eyebrow">{label}</p>

    <h2>{title}</h2>

    {detail && <p className="section-detail">{detail}</p>}

  </div>;

}



export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {

    const nodes = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {

      nodes.forEach((node) => node.classList.add("visible"));

      return;

    }

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    }, { threshold: 0.12 });

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();

  }, []);



  const closeMenu = () => setMenuOpen(false);



  return (

    <div className="site-shell" id="home">

      <div className="announcement">

        <span><span className="online-dot" /> OPEN TO OPPORTUNITIES</span>

        <span className="location"><MapPin size={13} /> {profile.location}</span>

      </div>



      <header className="navbar">

        <a className="brand" href="#home" onClick={closeMenu}>SD<span>.</span></a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">

          {menuOpen ? <X size={22} /> : <Menu size={22} />}

        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          <a href="#about" onClick={closeMenu}>About</a>

          <a href="#skills" onClick={closeMenu}>Skills</a>

          <a href="#projects" onClick={closeMenu}>Projects</a>

          <a href="#experience" onClick={closeMenu}>Experience</a>

          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          

<a
  className="nav-cta"
  href="/resume.pdf"
  download="Sanika_Deokar_Resume.pdf"
>
  Download Resume
  <ArrowDownRight size={15} />
</a>



        </nav>

      </header>



      <main>

        <section className="hero page-width">

          <div className="hero-copy reveal">

            <p className="eyebrow"><span className="eyebrow-line" /> HELLO, I'M SANIKA</p>

            <h1>Building ideas<br />into <span>intelligent</span><br />experiences<span className="period">.</span></h1>

            <p className="hero-lead">Full Stack Developer exploring the intersection of <strong>software engineering</strong> and <strong>AI.</strong></p>

            <p className="hero-text">I build web applications and experiment with AI-powered workflows, semantic search, and tools that solve practical problems.</p>

            <div className="hero-actions">

              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>

             
<a className="button button-quiet" href="#contact">
  Contact me 
</a>


            </div>

            <div className="social-row">

              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>

            </div>

          </div>



          <div className="hero-visual reveal" aria-label="Sanika Deokar profile photo">
            <div className="visual-glow" />
            <div className="visual-grid" />

            <div className="portrait-frame">
              <img
                src="/protfolio.png"
                alt="Sanika Deokar"
                className="profile-photo"
              />
              <div className="portrait-caption">
                <span className="online-dot" />
                <span>Building · Learning · Exploring AI</span>
              </div>
            </div>

            <div className="floating-chip chip-top">
              <Sparkles size={15} /> Curious by design
            </div>
            <div className="floating-chip chip-bottom">
              <BrainCircuit size={16} /> Code meets curiosity
            </div>
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <span className="spark spark-a">✳</span>
            <span className="spark spark-b">✦</span>
          </div>

          <a className="scroll-hint" href="#about"><span /> SCROLL TO EXPLORE</a>

        </section>



        <section className="about section-space page-width" id="about">

          <SectionIntro label="01 / ABOUT ME" title={<>Developer by craft.<br /><span>Problem-solver by nature.</span></>} />

          <div className="about-grid reveal">

            <p className="about-statement">I like turning complex ideas into software that feels useful, clear, and thoughtfully built.</p>

            <div className="about-copy">

              <p>I'm an Information Technology student at PVGCOET, Pune, with an interest in full-stack development and AI-powered applications.</p>

              <p>My work spans Python applications, frontend development, semantic matching, and stateful AI workflows. I'm focused on strengthening my engineering fundamentals through practical projects.</p>

              <a className="inline-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>

            </div>

          </div>

          <div className="stats-row reveal">

            <div><strong>05</strong><span>Projects featured</span></div>

            <div><strong>AI + Web</strong><span>Areas of focus</span></div>

            <div><strong>2023–27</strong><span>B.E. Information Technology</span></div>

          </div>

        </section>



        <section className="skills-section section-space" id="skills">

          <div className="page-width">

            <SectionIntro label="02 / MY TOOLKIT" title={<>Tools for the work.<br /><span>Room to grow.</span></>} detail="A growing set of technologies for building full-stack applications, backend workflows, and AI-driven experiences." />

            <div className="skills-grid">

              {skillGroups.map((skill, index) => <article className="skill-card reveal" key={skill.title}>

                <span className="skill-index">0{index + 1}</span>

                <h3>{skill.title}</h3>

                <p>{skill.items}</p>

              </article>)}

            </div>

          </div>

        </section>



        <section className="projects-section section-space page-width" id="projects">

          <div className="projects-heading">

            <SectionIntro label="03 / SELECTED WORK" title={<>Ideas made tangible.<br /><span>Projects in progress.</span></>} detail="A selection of projects exploring AI, full-stack development, and practical problem-solving." />

            <div className="project-counter">05 <span>PROJECTS</span></div>

          </div>

          <div className="projects-grid">

            {projects.map((project) => <article className={`project-card ${project.style} reveal`} key={project.number}>

              <div className="project-top"><span>{project.number} / 05</span><span className="project-category">{project.category}</span></div>

              <div className="project-icon">{project.number === "02" ? <Code2 size={21} /> : project.number === "03" ? <ArrowUpRight size={21} /> : <BrainCircuit size={21} />}</div>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>

              <div className="project-actions">
  {project.github && (
    <a
      className="project-link"
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      <Github size={15} />
      GitHub
      <ExternalLink size={13} />
    </a>
  )}

  {project.demo && (
    <a
      className="project-link project-demo-link"
      href={project.demo}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
      <ExternalLink size={13} />
    </a>
  )}

  {!project.github && (
    <span className="project-status">{project.status}</span>
  )}
</div>

            </article>)}

          </div>

          <p className="project-disclaimer">Some projects are still in progress. Additional repository links and demos can be added as they become available.</p>

        </section>



        <section className="experience-section section-space" id="experience">

          <div className="page-width">

            <SectionIntro label="04 / EXPERIENCE & EDUCATION" title={<>Learning through practice.<br /><span>Growing with each project.</span></>} />

            <div className="timeline">

              <article className="timeline-item reveal">

                <div className="timeline-icon"><BriefcaseBusiness size={17} /></div>

                <div className="timeline-content">

                  <div className="timeline-heading"><div><h3>Full Stack Python Developer Intern</h3><p>Technoworld Software</p></div><span>JAN — MAR 2026</span></div>

                  <p>Worked on web application development using Python and frontend technologies, debugging, testing, and database-related tasks.</p>

                  <div className="tags"><span>Python</span><span>React</span><span>JavaScript</span><span>MySQL</span></div>

                </div>

              </article>

              <article className="timeline-item reveal">

                <div className="timeline-icon"><Sparkles size={17} /></div>

                <div className="timeline-content">

                  <div className="timeline-heading"><div><h3>AI Research Intern · Faculty Mentorship</h3><p>PVGCOET</p></div><span>JAN — MAR 2026</span></div>

                  <p>Reviewed research on RAG hallucination detection and explored Python, Ollama, LLMs, and vector embeddings for AI evaluation.</p>

                  <div className="tags"><span>RAG</span><span>LLMs</span><span>Python</span><span>Research</span></div>

                </div>

              </article>

              <article className="timeline-item reveal">

                <div className="timeline-icon"><Code2 size={17} /></div>

                <div className="timeline-content">

                  <div className="timeline-heading"><div><h3>B.E. — Information Technology</h3><p>PVGCOET, Pune</p></div><span>2023 — 2027</span></div>

                  <p>Building a foundation in software development while exploring full-stack engineering and AI-powered applications.</p>

                </div>

              </article>

            </div>

          </div>

        </section>



        <section className="contact-section page-width" id="contact">

          <div className="contact-card reveal">

            <div className="contact-watermark">SD.</div>

            <p className="eyebrow">05 / LET'S CONNECT</p>

            <h2>Have a good idea?<br /><span>Let's build it.</span></h2>

            <p className="contact-description">Open to conversations about software development, AI projects, internships, and new opportunities.</p>

            <a className="button button-primary" href={`mailto:${profile.email}`}>Send me an email <Mail size={16} /></a>

            <div className="contact-socials">

              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>

              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email <ArrowUpRight size={13} /></a>

            </div>

          </div>

        </section>

      </main>



      <footer className="footer page-width">

        <a className="brand" href="#home">SD<span>.</span></a>

        <p>Designed with intention. Built with curiosity.</p>

        <span>© {new Date().getFullYear()} Sanika Deokar</span>

      </footer>

    </div>

  );

}
