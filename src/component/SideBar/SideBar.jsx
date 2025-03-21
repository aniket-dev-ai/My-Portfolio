import React, { useState } from "react";
import Links from "./Links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { delay, motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      delay: 0.5,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      delay: 0.5,
      damping: 30,
    },
  },
};
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="flex flex-col z-20 items-center justify-center bg-white text-black">
      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-80 bg-white text-black"
        variants={variants}
        animate={isOpen ? "open" : "closed"}
      >
        <Links />
      </motion.div>

      {/* Toggle Button */}
      <ToggleButton isOpen={isOpen} setOpen={setIsOpen} />
    </motion.div>
  );
}

export default SideBar;
