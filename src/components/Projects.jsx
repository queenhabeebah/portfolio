import projects from '../data/projectsData'

function Projects() {
  return (
    <section id='projects'>
<h3>My Projects</h3>
<div className='projects-grid'>
    {projects.map((project, index) => (
        <div key={index} className="project-box">
           <h4>{project.title}</h4> 
           <p>{project.description}</p> 
           <a href={project.demo} target='_blank' rel='noopener noreferrer'>Live Demo </a>
           <a href={project.code} target='_blank' rel='noopener noreferrer'>Code</a>
        </div>
    ))}
</div>
    </section>
  )
}

export default Projects