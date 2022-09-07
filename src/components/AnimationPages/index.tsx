import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPropsAnimationPages {
  children: ReactNode;
}

const AnimationPages = ({ children }: IPropsAnimationPages) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPages;
