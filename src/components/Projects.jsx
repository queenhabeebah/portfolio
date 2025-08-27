import projects from "../data/projectsData";
// const features = (projects.features)

function Projects() {
  return (
    <section id="projects">
      <h3>My Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <img src={project.image} alt="project-screenshot" />
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div>
                {project.stack.map((tech, ind) => (
                  <button className="tech-stack" key={ind}>{tech}</button>
                ))}
              </div>
              <a
                href={project.demo}
                title={`Click to see ${project.title} live demo`}
                target="_blank"
                rel="noopener noreferrer"
                className="demo"
              >
                Live Demo{" "}
              </a>
              <a
                href={project.code}
                title={`Source code for ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
