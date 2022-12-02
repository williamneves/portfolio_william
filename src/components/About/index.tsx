import React from "react";
import { motion } from "framer-motion";

type Props = {};

// https://williamneves.com/static/media/eu-landgradientcrop.05ab408b1e636bee9a55.png

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        src={"./IMG_0696.jpg"}
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="italic underline decoration-[#F7AB0A]/50">
            little
          </span>{" "}
          about me
        </h4>
        <p className="text-base">
          I'm a Full-Stack Software Engineer, looking for a different
          experience. After 10 years of successful corporate experience, I
          decided to challenge myself and follow the path that I am certain I
          will be more passionate and even better atn. If you're looking for
          someone highly motivated, with experience and unique skills, you've
          found it. Let's talk?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
