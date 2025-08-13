import skills from "../data/skillsData";

function Skills() {
  return (
    <section id="skills">
      <h3>Skills & Tools</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
            <div key={index} className="skill-item">
               < skill.icon color={skill.color} size={30} />
                <p>{skill.name}</p>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
