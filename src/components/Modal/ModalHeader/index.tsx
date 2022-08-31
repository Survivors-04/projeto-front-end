import { useContext, useEffect, useRef, useState } from "react";
import iconUserHeader from "../../../assets/imgs/HeaderSvg/iconUserHeader.svg";
import { StyledDiv } from "./style";
import { FaHome, FaUser } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosHelpCircle } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../ModalBase";
import { ModalContext } from "../../../context/ModalContext";
import { Link } from "react-router-dom";

const ModalHeader = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { setIsModalHeader } = useContext(ModalContext);

  return (
    <Modal setIs={setIsModalHeader}>
      <StyledDiv>
        <AnimatePresence>
          <motion.div
            className="div-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <ul>
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
                <li>
                  <FaUser />
                  <a href="/">Login</a>
                </li>
              )}
            </ul>
          </motion.div>
        </AnimatePresence>
      </StyledDiv>
    </Modal>
  );
};

export default ModalHeader;
