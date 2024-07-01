import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      {/* Hero  */}
      <div className="flex flex-col justify-center min-h-[calc(100vh-116px)] pb-12">
        <div className="max-w-[85rem] mx-auto px-4">
          {/* Title  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mx-auto"
          >
            <h1 className="block font-bold text-gray-800 text-4xl lg:text-5xl">Welcome!</h1>
            <h1 className="block font-bold text-gray-800 text-4xl lg:text-5xl">I am Rifat Hassan</h1>
          </motion.div>
          {/* End Title  */}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-3xl text-center mx-auto"
          >
            <p className="text-base text-gray-600 max-w-xl">
              A Frontend Developer driven by the challenge of converting complex ideas into elegant code.
            </p>
          </motion.div>

          {/* Buttons  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 gap-3 flex justify-center items-center"
          >
            <a
              className="inline-flex justify-center items-center shadow-lg gap-x-3 text-center bg-black/90 hover:bg-white border border-primary hover:text-black text-white transition-all duration-300 text-sm font-medium rounded-full py-3 px-6"
              href="/Rifat-Hassan-Resume.pdf"
              download="Rifat Hassan Resume.pdf"
            >
              <MdOutlineFileDownload className="size-5" />
              Download Resume
            </a>
          </motion.div>
          {/* End Buttons  */}
        </div>
      </div>
      {/* End Hero  */}
    </div>
  );
};

export default Home;
