import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -10, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const buttonVariants = {
  hover: { scale: 1.1, rotate: 3, transition: { yoyo: Infinity, duration: 0.3 } },
  tap: { scale: 0.95, rotate: -3 },
};

function Services() {
  return (
    <div className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] mt-20 min-h-screen text-white font-sans overflow-hidden">
      {/* 🔥 Header Section */}
      <motion.header
        className="container mx-auto px-4 py-8 flex justify-between items-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-center">
          <motion.div
            className="w-12 h-12 bg-white rounded-full mr-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ></motion.div>
          <motion.div
            className="w-4 h-4 rounded-full border border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          ></motion.div>
        </div>
        <motion.div
          className="text-sm opacity-75"
          animate={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 1 }}
        >
          I focus on helping your brand grow and move forward
        </motion.div>
      </motion.header>

      {/* 🎬 Hero Section */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative inline-block w-full max-w-4xl mx-auto">
          <motion.img
            src="/hero-image.jpg"
            alt="Hero"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
            whileHover={{ scale: 1.05, filter: "blur(2px)" }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Unique Ideas
            </h1>
          </motion.div>
        </div>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 opacity-90"
          animate={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          For Your Business.
        </motion.h2>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-yellow-500 text-black px-8 py-3 rounded-full mt-8 font-semibold shadow-md"
        >
          WHAT WE DO?
        </motion.button>
      </motion.section>

      {/* 🚀 Services Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.3 }}
        >
          {["Branding", "Design", "Development", "Marketing"].map(
            (service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95, rotate: -2 }}
                className="bg-[#111132] border border-gray-700 hover:bg-white hover:text-[#111132] rounded-2xl p-6 shadow-lg transition duration-300 relative"
              >
                <motion.div
                  className="absolute inset-0 bg-yellow-500 opacity-10 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0.1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                ></motion.div>

                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <motion.p
                  className="text-sm text-gray-400"
                  animate={{ opacity: [0, 1], y: [10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum libero enim nisi aliquam.
                </motion.p>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-yellow-500 text-black px-6 py-2 rounded-full mt-6 font-semibold"
                >
                  Learn More
                </motion.button>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.section>

      {/* ⚡️ Scrolling Text Effect */}
      <motion.div
        className="fixed bottom-1 w-full text-center text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        🚀 We build brands that make an impact! 🎯
      </motion.div>
    </div>
  );
}

export default Services;
