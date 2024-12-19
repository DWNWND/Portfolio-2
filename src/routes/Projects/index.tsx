import { Helmet, HelmetProvider } from "react-helmet-async";
import ProjectSection from "../../components/ProjectSection";
import { projectsArr } from "../../assets/projects/projectArr";

export default function Projects() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>My Projects | Thea – Creative Front-End Development Work</title>
        <meta name="description" content="Check out my favorite web development projects! From interactive designs to robust functionality, here’s a peek at the work I’m proud to share with the world." />
      </Helmet>
      <div>
        <div className="flex flex-col mt-20">
          {projectsArr.map((project) => (
            <ProjectSection project={project} key={project.id} />
          ))}
        </div>
        <h1>Projects</h1>
        <p>Welcome to the projects page!</p>
      </div>
    </HelmetProvider>
  );
}
