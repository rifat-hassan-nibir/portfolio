import { motion } from "framer-motion";
import Gap from "../components/Gap";
import Description from "../components/utils/Description";
import SectionHeading from "../components/utils/SectionHeading";

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

const AboutMe = () => {
  return (
    <div className="py-10 lg:py-14">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <SectionHeading text={"About Me"} />
      </motion.div>

      <Gap />

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Description
          text={
            "I am Rifat Hassan, a Frontend Developer driven by the challenge of converting complex ideas into elegant code. With a strong background in HTML, CSS, JavaScript, and frameworks like React, I strive to create seamless user experiences. My journey in web development has been fueled by a passion for learning and innovation."
          }
        />
      </motion.div>

      <Gap />
      <Gap />
      <Gap />

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <SectionHeading text={"Skills"} />
      </motion.div>

      <Gap />
      <Gap />

      {/* Skills Section */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + 0.2 * index }}
            key={index}
            className="flex flex-col items-center"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{skill.level}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className={`${skill.color} h-2.5 rounded-full`}
                style={{ width: skill.level === "Expert" ? "90%" : skill.level === "Advanced" ? "75%" : "60%" }}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMe;
