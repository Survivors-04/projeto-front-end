import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPropsAnimationScale {
  children: ReactNode;
}

const AnimationScale = ({ children }: IPropsAnimationScale) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 1, yoyo: Infinity }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationScale;
