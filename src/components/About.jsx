import { ABOUT_CONTENT } from "../constants/content";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import ResumePDF from "/assets/pdf/resume.pdf";

const animatedContainer = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const About = () => {
  return (
    <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-5">
      <div className="flex flex-wrap justify-center ">
        <div className="w-full px-4">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={animatedContainer(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl lg:text-5xl mt-8 lg:mt-16 tracking-tight font-serif font-light text-white"
            >
              Sanket Shelke
            </motion.h1>
            <motion.div
              variants={animatedContainer(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-3xl font-light tracking-tight"
            >
              <span className="text-white items-start">I am a </span>
              <span className="bg-gradient-to-r from-cyan-100 via-cyan-300 to-sky-500
bg-clip-text text-transparent font-medium
">
                <Typewriter
                  words={["Full Stack Developer", "Mobile App Developer"]}
                  loop={0}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>
            <motion.p
              variants={animatedContainer(1)}
              initial="hidden"
              animate="visible"
              className="max-w-lg py-6 font-light tracking-wide text-center text-base lg:text-lg text-neutral-300 leading-relaxed"
            >
              {ABOUT_CONTENT}
            </motion.p>
            <motion.a
              href={ResumePDF}
              download="Sanket_Shelke_Resume.pdf"
              className="inline-flex items-center mt-6 my-6 px-6 py-3
rounded-xl font-semibold text-cyan-100
backdrop-blur-xl bg-white/10
border border-cyan-300/40
shadow-[0_0_25px_rgba(0,255,255,0.25)]
hover:bg-white/20 hover:border-cyan-300/60
hover:shadow-[0_0_35px_rgba(0,255,255,0.45)]
transition-all duration-300
"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <FaDownload className="mr-2 text-lg" />
              Download Resume
            </motion.a>
          </div>
        </div>

      </div>
    </Element>
  );
};

export default About;
