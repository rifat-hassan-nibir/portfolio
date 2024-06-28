import projects from "../../public/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/utils/SectionHeading";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-10 lg:py-14">
      <SectionHeading text={"Projects"} />

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div className="flex" key={project.id}>
            <ProjectCard
              id={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
