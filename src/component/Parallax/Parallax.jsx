import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]); // Reduced movement
  const ytxt = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]); // Smoother transition

  return (
    <div
      ref={ref}
      className="h-screen snap-center relative flex justify-center items-center text-white overflow-hidden"
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {/* 🚀 Text Animation */}
      <motion.h1
        style={{ y: ytxt }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-center px-4"
      >
        {type === "Services" ? "What we do" : "What we Did"}
      </motion.h1>

      {/* 🚀 Background Images (Fixed Responsiveness) */}
      <motion.div className="absolute z-30 bottom-0 left-0 w-full h-full">
        <motion.img
          src="/mountains.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      <motion.div
        style={{ y: ybg }}
        className="absolute bottom-0 z-20 left-0 w-full h-full"
      >
        <motion.img
          src="/planets.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      <motion.div
        style={{ x: ybg }}
        className="absolute z-10 bottom-0 left-0 w-full h-full"
      >
        <motion.img
          src="/stars.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>
    </div>
  );
}

export default Parallax;
