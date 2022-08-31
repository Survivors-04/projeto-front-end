import { ReactNode, useEffect, useRef } from "react";
import { StyledModalBox, StyledModalContainer } from "./style";

interface iModal {
  children: ReactNode;
  setIs: (arg0: boolean) => void
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
    <StyledModalContainer>
      <StyledModalBox ref={modalRef}>{children}</StyledModalBox>
    </StyledModalContainer>
  );
};

export default Modal;
