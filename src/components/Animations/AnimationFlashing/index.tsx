import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPropsAnimationFlashing {
  children: ReactNode;
}
const AnimationFlashing = ({ children }: IPropsAnimationFlashing) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, yoyo: Infinity }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationFlashing;
