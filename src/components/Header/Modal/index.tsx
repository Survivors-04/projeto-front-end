import { useEffect, useRef, useState } from "react";
import iconUserHeader from "../../../assets/imgs/HeaderSvg/iconUserHeader.svg";
import { StyledDiv } from "./style";
import { FaHome } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface IModal {
  setIsOpen: (open: boolean) => void;
}

export interface IEvent {
  target: HTMLDivElement | any;
}

const Modal = ({ setIsOpen }: IModal) => {
  const [isLogged, setIsLogged] = useState(false);
  const modalRef = useRef<null | HTMLUListElement>(null);

  useEffect(() => {
    function handleOutClick(event: IEvent) {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <StyledDiv>
      <AnimatePresence>
        <motion.div
          className="div-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <ul className="menu" ref={modalRef}>
            <li>
              <FaHome />
              <a href="/">Início</a>
            </li>
            <li>
              <GiOpenTreasureChest />
              <a href="/">Recompensa</a>
            </li>
            <li>
              <BsFillCartFill />
              <a href="/">Mercado</a>
            </li>
            <li>
              <IoIosHelpCircle />
              <a href="/">Ajuda</a>
            </li>
            <li>
              <IoPeopleSharp />
              <a href="/">Sobre nós</a>
            </li>
            {isLogged && <span>100g</span>}
            {isLogged ? (
              <button>
                <img src={iconUserHeader} alt="" />
              </button>
            ) : (
              <button>Login</button>
            )}
          </ul>
        </motion.div>
      </AnimatePresence>
    </StyledDiv>
  );
};

export default Modal;
