import { animate, stagger } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollbutton: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  const slideVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="h-[calc(100vh-96px)] -z-20 bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative px-5 md:px-10">
      <div className="h-full flex flex-col justify-center">
        <div className="max-w-[1366px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* 🚀 Left Content */}
          <motion.div
            variants={textVariants}
            className="wrapper flex flex-col  justify-center gap-y-8 md:gap-y-12 text-center lg:text-left"
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={textVariants}
              className="text-[#5a29ab] text-4xl md:text-5xl font-bold"
            >
              Aniket Srivastava
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-white text-4xl md:text-6xl lg:text-7xl"
            >
              Full Stack and <br /> Productive Developer
            </motion.p>

            {/* 🚀 Buttons */}
            <motion.div className="flex gap-4 justify-center lg:justify-start">
              <motion.button
                variants={textVariants}
                className="border-2 border-white py-3 px-6 text-sm rounded-lg md:text-md md:px-8 md:py-4"
              >
                See My Projects
              </motion.button>
              <motion.button
                variants={textVariants}
                className="border-2 border-white py-3 px-6 text-sm bg-white text-gray-900 rounded-lg md:text-md md:px-8 md:py-4"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* 🚀 Scroll Icon */}
            <motion.img
              variants={textVariants}
              src="/scroll.png"
              alt="Scroll Down"
              className="w-16 md:w-20 mx-auto lg:mx-0"
              animate="scrollbutton"
            />
          </motion.div>

          {/* 🚀 Right Image */}
          <div className="relative w-full lg:w-[60vw] flex justify-center lg:justify-end">
            <img
              src="/pic1.png"
              alt="Hero"
              className="max-w-[90%] lg:w-[50vw] object-contain"
            />
          </div>
        </div>
      </div>

      {/* 🚀 Infinite Scrolling Text */}
      <motion.div
        variants={slideVariants}
        initial="initial"
        animate="animate"
        className="absolute text-[10vw] -bottom-16 text-[#ffffff09] whitespace-nowrap"
      >
        Writing Content Creator Influencer
      </motion.div>
    </div>
  );
}

export default Hero;
