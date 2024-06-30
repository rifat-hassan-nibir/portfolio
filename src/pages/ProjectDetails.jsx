import { Link, useParams } from "react-router-dom";
import projects from "../../public/projects";
import { MdArrowOutward } from "react-icons/md";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="my-12 lg:my-14 text-center">Project not found</div>;
  }

  return (
    <div className="py-12 lg:py-14">
      <div className="bg-primary px-6 py-8 lg:p-12 text-white rounded-lg overflow-hidden shadow-lg flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-1/2">
          <div>
            <h2 className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-6">{project.title}</h2>
            <p className="text-gray-300 text-base mb-6">{project.description}</p>
          </div>
          <div className="pt-4 lg:pt-6">
            <h3 className="font-semibold text-xl lg:text-2xl mb-4">Technologies Used</h3>
            <div className="pt-1 lg:pt-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 lg:mr-4 mb-4 lg:mb-4"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Preview */}
            <div className="flex items-center mt-8">
              <Link
                to={project.link}
                className="bg-white border border-white text-black font-bold py-2 px-6 hover:bg-primary hover:text-white transition-all duration-300 hover:border rounded-full flex items-center"
              >
                Live Preview
                <MdArrowOutward className="text-[22px] ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 h-[600px] overflow-y-scroll rounded-lg">
          <img className="w-full rounded-lg" src={project.image} alt={project.title} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
