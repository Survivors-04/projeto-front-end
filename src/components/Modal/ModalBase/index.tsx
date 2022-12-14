import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { StyledModalBox, StyledModalContainer } from "./style";

export interface iModal {
  children: ReactNode;
  setIs: (arg0: boolean) => void;
}

export interface IEvent {
  type: string;
  target: HTMLDivElement | any;
}

const Modal = ({ children, setIs }: iModal) => {
  const modalRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    function handleOutClick(event: any) {
      if (!modalRef.current?.contains(event.target)) {
        setIs(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setIs]);

  return (
    <StyledModalContainer
      as={motion.div}
      key="modalBase"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <StyledModalBox ref={modalRef}>{children}</StyledModalBox>
    </StyledModalContainer>
  );
};

export default Modal;
