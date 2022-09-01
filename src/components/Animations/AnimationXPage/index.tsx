import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPropsAnimationXPage {
  children: ReactNode;
  delay?: number;
}

const AnimationXPage = ({ children, delay }: IPropsAnimationXPage) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ y: "-100vw" }}
      transition={{ duration: 1, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationXPage;
