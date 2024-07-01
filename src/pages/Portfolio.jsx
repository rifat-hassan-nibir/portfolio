import { motion } from "framer-motion";
import projects from "../../public/projects";
import Gap from "../components/Gap";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/utils/SectionHeading";

const Portfolio = () => {
  return (
    <div className="py-10 lg:py-14">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <SectionHeading text={"Projects"} />
      </motion.div>

      <Gap />

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex"
          >
            <ProjectCard
              id={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
