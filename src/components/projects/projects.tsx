import ProjectCard from '../project-card/project-card';
import projectData from '../../data/projects.json';
import './projects.css';

const Projects = () => {
  const header = 'Portfolio';
  const subHeader = "Take a look at what I've been working on";
  return (
    <div className="vertical-margins">
      <h2>{header}</h2>
      <h6 className="sub-header-buffer">{subHeader}</h6>
      <article className="project">
        {projectData?.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              background={project.background}
              title={project.title}
              caption={project.caption}
              gitHubLink={project.gitHubLink}
              siteLink={project.siteLink}
            />
          );
        })}
      </article>
    </div>
  );
};
export default Projects;
