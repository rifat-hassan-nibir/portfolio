import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import projects from "../../public/projects";
import { MdArrowOutward } from "react-icons/md";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="my-10 lg:my-14 text-center">Project not found</div>;
  }

  return (
    <div className="py-10 lg:py-14">
      <div className="bg-primary px-4 py-6 lg:p-12 text-white rounded-lg overflow-hidden shadow-lg flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-1/2">
          <div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-2xl lg:text-3xl mb-4 lg:mb-6"
            >
              {project.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-base mb-6"
            >
              {project.description}
            </motion.p>
          </div>
          <div className="pt-4 lg:pt-6">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-semibold text-xl lg:text-2xl mb-4"
            >
              Technologies Used
            </motion.h3>

            {project.technologies.map((tech, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                key={index}
                className="inline-block mr-2 mt-2 bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-800"
              >
                {tech}
              </motion.div>
            ))}

            {/* Live Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center mt-12"
            >
              <Link
                to={project.link}
                target="_blank"
                className="bg-white border border-white text-black font-bold py-2 px-6 hover:bg-primary hover:text-white transition-all duration-300 hover:border rounded-full flex items-center"
              >
                Live Preview
                <MdArrowOutward className="text-[22px] ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="lg:w-1/2 max-h-[600px] overflow-y-scroll rounded-lg"
        >
          <img className="w-full rounded-lg" src={project.image} alt={project.title} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
