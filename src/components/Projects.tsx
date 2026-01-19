import type { Project } from "../data/projectsData";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Showcase your builds in a clean grid.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
