import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPropsAnimationY {
  children: ReactNode;
  delay?: number;
}

const AnimationY = ({ children, delay }: IPropsAnimationY) => {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: delay ? delay : 0, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationY;
