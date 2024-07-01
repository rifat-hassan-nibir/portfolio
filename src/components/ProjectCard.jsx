/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({ id, image, title, description, technologies }) => {
  return (
    <Link to={`/portfolio/project-details/${id}`} className="flex flex-col h-full">
      <div className="flex flex-col justify-between h-full py-1 rounded-lg overflow-hidden shadow-lg bg-primary text-white">
        <div className="p-4 lg:p-5 flex-grow">
          <div className="h-[200px] overflow-hidden">
            <img className="w-full object-cover" src={image} alt={title} />
          </div>
          <h3 className="font-bold text-xl mb-2 mt-6">{title}</h3>
          <p className="text-gray-300 text-base">{description.slice(0, 90)}...</p>
        </div>
        <div className="p-4 lg:p-5">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-800 mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
