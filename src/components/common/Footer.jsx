import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary py-4 text-white">
      <div className="container mx-auto flex justify-between px-4 lg:px-0">
        <p className="text-center text-sm text-white">All rigths reserved.</p>
        <div className="flex gap-5">
          <Link to="https://github.com/rifat-hassan-nibir" target="_blank">
            <FaGithub className="size-5" />
          </Link>
          <Link to="https://www.linkedin.com/in/rifat-hassan-nibir1/" target="_blank">
            <FaLinkedin className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
