import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const motionAnimation = {
  left: {
    initial: {
      x: -500,
      opacity: 0,
      scale: 0.5,
    },
  },
  right: {
    initial: {
      x: 500,
      opacity: 0,
      scale: 0.5,
    },
  },
  animation: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 1.8,
    type: "spring",
    stiffness: 50,
  },
};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        initial={motionAnimation.left.initial}
        animate={motionAnimation.animation}
        transition={motionAnimation.transition}
        className="flex flex-row items-center"
      >
        {/* Social */}
        <SocialIcon
          url="https://twitter.com/drwilliamneves"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/williamneves"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/gwilliamnn/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      {/* Get in touch */}
      <motion.div
        initial={motionAnimation.right.initial}
        animate={motionAnimation.animation}
        transition={motionAnimation.transition}
        className="flex cursor-pointer flex-row items-center text-gray-300"
      >
        <SocialIcon
          url="mailto:gwilliam.nn@gmail.com"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
