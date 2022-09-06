import {
  Nav,
  StyledContainer,
  StyledDiv,
  StyledHeaderContainer,
  StyledHeaderMobile,
  StyledNavButton,
} from "./style";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";
import iconUserHeader from "../../assets/imgs/HeaderSvg/iconUserHeader.svg";
import menuLogo from "../../assets/imgs/HeaderSvg/menu.svg";
import { useContext, useState } from "react";
import { ModalContext } from "../../Context/ModalContext";
import DiceRoll from "../Modal/DiceRoll";
import ModalHeader from "../Modal/ModalHeader";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { UserContext } from "../../Context/UserContext";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const { isModalDice, setIsModalDice } = useContext(ModalContext);
  const { isModalHeader, setIsModalHeader } = useContext(ModalContext);
  const { isLogged } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <StyledContainer>
        <StyledHeaderContainer>
          <StyledDiv>
            <img src={logoHeader} alt="ImageGroup4" />
          </StyledDiv>

          <StyledHeaderMobile>
            <button onClick={() => setIsModalHeader(true)}>
              <img src={menuLogo} alt="" />
            </button>
          </StyledHeaderMobile>

          <Nav>
            <ul>
              <li>
                <Link to={"/"}>Início</Link>
              </li>
              <li>
                <StyledNavButton onClick={() => setIsModalDice(true)}>
                  Recompensa
                </StyledNavButton>
              </li>
              <li>
                <Link to={"/marketplace"}>Mercado</Link>
              </li>
              <li>
                <Link to={"/help"}>Ajuda</Link>
              </li>
              <li>
                <Link to={"/aboutus"}>Sobre nós</Link>
              </li>
              <>
                {isLogged ? (
                  <>
                    <li>
                      <span>{user.gold}g</span>
                    </li>
                    <li>
                      <StyledNavButton onClick={() => setIsOpenModal(true)}>
                        <img src={iconUserHeader} alt="Icone de usuário" />
                      </StyledNavButton>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button
                      width={100}
                      onClick={() => navigate("/login", { replace: true })}
                      textColor={"var(--color-blue)"}
                      backgroundColor={"var(--color-yellow)"}
                      hover={"var(--color-yellow-focus)"}
                    >
                      Login
                    </Button>
                  </li>
                )}
              </>
            </ul>
          </Nav>
        </StyledHeaderContainer>
      </StyledContainer>
      <AnimatePresence>{isModalHeader && <ModalHeader />}</AnimatePresence>
      {isModalDice && <DiceRoll />}
    </>
  );
};

export default Header;
