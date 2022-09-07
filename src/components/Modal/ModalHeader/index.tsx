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
import Button from "../../Button";
import { StyledNavButton } from "../../Header/style";
import Modal from "../ModalBase";
import { StyledSideHeader } from "./style";
import { ImExit } from "react-icons/im";
import { BiLogInCircle } from "react-icons/bi";

const ModalHeader = () => {
  const { setIsModalHeader, setIsModalDice } = useContext(ModalContext);
  const { user, isLogged, setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    setIsLogged(false);
    navigate("/login", { replace: true });
  };

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
            {isLogged ? (
              <>
                <li>
                  {user.name}
                  <span>{user.gold}</span>
                </li>
                <li>
                  <FaUser />
                  <Link to={"/profile"}>Perfil</Link>
                </li>
              </>
            ) : (
              <li>
                <Button
                  width={50}
                  onClick={() => navigate("/login", { replace: true })}
                  textColor={"var(--color-blue)"}
                  backgroundColor={"var(--color-yellow)"}
                  hover={"var(--color-yellow-focus)"}
                >
                  Login
                </Button>
              </li>
            )}

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
              <Link to={"/aboutus"}>Sobre nós</Link>
            </li>
            <li>
              <StyledNavButton onClick={logout}>
                {token ? (
                  <>
                    <ImExit /> Sair
                  </>
                ) : (
                  <>
                    <BiLogInCircle /> Entrar
                  </>
                )}
              </StyledNavButton>
            </li>
          </ul>
        </StyledSideHeader>
      </Modal>
    </>
  );
};

export default ModalHeader;
