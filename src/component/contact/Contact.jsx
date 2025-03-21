import React from "react";
import { motion } from "framer-motion";

const sliderVariants = {
  animate: {
    x: ["-100%", "100%"],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 8,
      ease: "linear",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 15px rgba(255,255,255,0.9)",
  },
  tap: {
    scale: 0.9,
  },
};

const inputVariants = {
  focus: { scale: 1.05 },
};

const Contact = () => {
  return (
    <motion.div
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0c0c1d] to-[#111132] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* **✨ Auto-Moving Sliders - Multiple Texts** */}
      <motion.div
        className="absolute top-8 w-full text-center text-lg text-gray-300 font-bold"
        variants={sliderVariants}
        animate="animate"
      >
        🚀 **Welcome to Aniket's Contact Page!** 🚀
      </motion.div>

      <motion.div
        className="absolute bottom-8 w-full text-center text-lg text-gray-300 font-bold"
        variants={sliderVariants}
        animate="animate"
      >
        **"Opportunities don’t happen. You create them."** 🔥
      </motion.div>

      {/* **💎 Contact Form Container - Glassmorphism UI** */}
      <motion.div
        className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-500"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* **🔥 Header Section - Sliding In** */}
        <motion.h1
          className="text-4xl font-extrabold text-center text-yellow-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Aniket Ji
        </motion.h1>

        <motion.p
          className="text-center text-gray-300 mt-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          "Let's build something extraordinary together!"
        </motion.p>

        {/* **📜 Contact Info - Floating Effect** */}
        <motion.div
          className="mt-6 text-center"
          variants={floatingVariants}
          animate="animate"
        >
          <p className="text-lg text-gray-300">📍 Kanpur, Uttar Pradesh, India</p>
          <p className="text-lg text-gray-300">📧 aniket@example.com</p>
          <p className="text-lg text-gray-300">📞 +91 9876543210</p>
        </motion.div>

        {/* **🚀 Animated Form - Sliding from Right** */}
        <motion.form className="mt-8 space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            variants={inputVariants}
            whileFocus="focus"
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            variants={inputVariants}
            whileFocus="focus"
          />
          <motion.textarea
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows="4"
            variants={inputVariants}
            whileFocus="focus"
          />

          {/* **✨ Submit Button - Pro-Level Animation** */}
          <motion.button
            className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      {/* **🔥 Background Floating Elements for Depth Effect** */}
      <motion.div
        className="absolute top-10 left-20 w-20 h-20 bg-blue-500 bg-opacity-50 rounded-full"
        animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-28 h-28 bg-pink-500 bg-opacity-50 rounded-full"
        animate={{ y: [0, -10, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute top-40 right-40 w-24 h-24 bg-green-500 bg-opacity-50 rounded-full"
        animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default Contact;
