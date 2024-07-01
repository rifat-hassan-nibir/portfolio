import { motion } from "framer-motion";
import Gap from "../components/Gap";
import Description from "../components/utils/Description";
import SectionHeading from "../components/utils/SectionHeading";
import skills from "../../public/skills";

const AboutMe = () => {
  return (
    <div className="py-10 lg:py-14">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <SectionHeading text={"About Me"} />
      </motion.div>

      <Gap />

      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <Description
          text={
            "I am Rifat Hassan, a Frontend Developer driven by the challenge of converting complex ideas into elegant code. With a strong background in HTML, CSS, JavaScript, and frameworks like React, I strive to create seamless user experiences. My journey in web development has been fueled by a passion for learning and innovation."
          }
        />
      </motion.div>

      <Gap />
      <Gap />
      <Gap />

      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <SectionHeading text={"Skills"} />
      </motion.div>

      <Gap />

      {/* Skills Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 + 0.3 * index }}
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
