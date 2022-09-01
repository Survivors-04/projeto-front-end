import { Nav, StyledContainer, StyledDiv } from "./style";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";
import iconUserHeader from "../../assets/imgs/HeaderSvg/iconUserHeader.svg";
import menuLogo from "../../assets/imgs/HeaderSvg/menu.svg";
import { useContext, useState } from "react";
import Modal from "../Modal/ModalHeader";
import { ModalContext } from "../../Context/ModalContext";
import DiceRoll from "../Modal/DiceRoll";
import ModalHeader from "../Modal/ModalHeader";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  const { isModalDice, setIsModalDice } = useContext(ModalContext);
  const { isModalHeader, setIsModalHeader } = useContext(ModalContext);

  return (
    <>
      <StyledContainer>
        <StyledDiv>
          <img src={logoHeader} alt="ImageGroup4" />

          <button onClick={() => setIsModalHeader(true)}>
            <img src={menuLogo} alt="" />
          </button>
          {isModalHeader && <ModalHeader />}
        </StyledDiv>

        <Nav>
          <ul>
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <button onClick={() => setIsModalDice(true)}>Recompensa</button>
            </li>
            <li>
              <Link to={"/marketplace"}>Mercado</Link>
            </li>
            <li>
              <Link to={""}>Ajuda</Link>
            </li>
            <li>
              <Link to={""}>Sobre nós</Link>
            </li>
            <li>
              {isLogged && <span>100g</span>}
              {isLogged ? (
                <button>
                  <img src={iconUserHeader} alt="" />
                </button>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </li>
          </ul>
        </Nav>
      </StyledContainer>
      {isModalDice && <DiceRoll />}
    </>
  );
};

export default Header;
