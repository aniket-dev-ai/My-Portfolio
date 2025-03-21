import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={ref} className="  flex justify-center lg:h-[60vh] items-center px-6">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full max-w-6xl mx-auto gap-10">
        {/* 🔥 Image Animation */}
        <motion.img
          src={item.img}
          alt={item.title}
          className="w-full max-w-md lg:max-w-lg object-cover rounded-xl shadow-lg"
          style={{ y, opacity }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* 🔥 Text & Button */}
        <motion.div
          className="flex flex-col items-start text-center lg:text-left"
          style={{ y, opacity }}
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {item.title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mt-3 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {item.desc}
          </motion.p>
          <motion.button
            className="mt-5 bg-blue-500 px-6 py-3 font-semibold rounded-lg text-white shadow-lg hover:bg-blue-600 transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            See Demo 💫
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

function Portfolio({ projects }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scrollX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative bg-black text-white min-h-screen">
      {/* 🔥 Sticky Title Bar */}
      <div className="sticky top-0 left-0 py-8 text-center text-orange-500 text-5xl md:text-7xl lg:text-8xl z-50 bg-black/80 backdrop-blur-md">
        <h1>Featured Work</h1>
        <motion.div
          style={{ scaleX: scrollX }}
          className="h-2 bg-white mt-2 rounded-lg"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* 🔥 Projects List */}
      {projects.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Portfolio;
