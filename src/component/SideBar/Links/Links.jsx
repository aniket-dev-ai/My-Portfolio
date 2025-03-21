import { stagger } from "framer-motion";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
function Links() {
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];
  return (
    <div>
      <motion.div
        className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
        variants={variants}
      >
        {items.map((item, index) => (
          <motion.a
            href={`#${item}`}
            key={index}
            className="text-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Links;
