import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen, isOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-12 h-12 flex items-center justify-center rounded-full fixed top-6 left-6 bg-transparent border-none"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Top Line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false} 
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" ,delay:0.5 }}
          d="M 2 2.5 L 20 2.5"
        />

        {/* Middle Line (Hides in open state) */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false} 
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 ,delay:0.5}}
          d="M 2 9.423 L 20 9.423"
        />

        {/* Bottom Line */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          initial={false} 
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" ,delay:0.5}}
          d="M 2 16.346 L 20 16.346"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
