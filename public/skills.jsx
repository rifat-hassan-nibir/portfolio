import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiFigma, SiFramer, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: "Expert", icon: <FaHtml5 className="text-orange-600" />, color: "bg-orange-600" },
  { name: "CSS", level: "Expert", icon: <FaCss3Alt className="text-blue-600" />, color: "bg-blue-600" },
  { name: "Bootstrap", level: "Advanced", icon: <FaBootstrap className="text-purple-600" />, color: "bg-purple-600" },
  { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-teal-400" />, color: "bg-teal-400" },
  { name: "JavaScript", level: "Advanced", icon: <FaJs className="text-yellow-500" />, color: "bg-yellow-500" },
  { name: "React", level: "Advanced", icon: <FaReact className="text-blue-400" />, color: "bg-blue-400" },
  { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs className="text-black" />, color: "bg-gray-800" },
  { name: "Node JS", level: "Intermediate", icon: <FaNodeJs className="text-green-600" />, color: "bg-green-600" },
  { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="text-green-500" />, color: "bg-green-500" },
  { name: "Framer Motion", level: "Intermediate", icon: <SiFramer className="text-pink-500" />, color: "bg-pink-500" },
  { name: "Photoshop", level: "Intermediate", icon: <SiAdobephotoshop className="text-blue-900" />, color: "bg-blue-900" },
  { name: "Figma", level: "Intermediate", icon: <SiFigma className="text-red-400" />, color: "bg-red-400" },
];

export default skills;
