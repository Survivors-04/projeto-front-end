import { motion } from "framer-motion";
import React, { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FaHome, FaUser } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
import { IoIosHelpCircle } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ModalContext } from "../../../Context/ModalContext";
import { UserContext } from "../../../Context/UserContext";
import { StyledNavButton } from "../../Header/style";
import Modal from "../ModalBase";
import { StyledSideHeader } from "./style";

const ModalHeader = () => {
  const { setIsModalHeader, setIsModalDice } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const token = window.localStorage.getItem("@TOKEN");

  return (
    <>
      <Modal setIs={setIsModalHeader}>
        <StyledSideHeader
          as={motion.ul}
          key="modalHeader"
          initial={{ x: "+100vw" }}
          exit={{ x: "+300vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul>
            <li>
              {user.name}
              <span>{user.gold}</span>
            </li>
            <li>
              <FaUser />
              <Link to={"/profile"}>Perfil</Link>
            </li>
            <li>
              <FaHome />
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <GiOpenTreasureChest />
              <StyledNavButton
                onClick={() => {
                  setIsModalHeader(false);
                  setIsModalDice(true);
                }}
              >
                Recompensa
              </StyledNavButton>
            </li>
            <li>
              <BsFillCartFill />
              <Link to={"/marketplace"}>Mercado</Link>
            </li>
            <li>
              <IoIosHelpCircle />
              <Link to={"/"}>Ajuda</Link>
            </li>
            <li>
              <IoPeopleSharp />
              <Link to={"/"}>Sobre nós</Link>
            </li>
            <li>
              <StyledNavButton
                onClick={() => {
                  localStorage.clear();
                  navigate("/login", { replace: true });
                }}
              >
                {token ? <>Sair</> : <>Entrar</>}
              </StyledNavButton>
            </li>
          </ul>
        </StyledSideHeader>
      </Modal>
    </>
  );
};

export default ModalHeader;
