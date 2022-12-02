import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <div className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
    </div>
  );
};

export default WorkExperience;
