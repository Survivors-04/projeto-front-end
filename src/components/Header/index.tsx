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

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const { isModalDice, setIsModalDice } = useContext(ModalContext);
  const { isModalHeader, setIsModalHeader } = useContext(ModalContext);

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
                <Link to={"/aboutUs"}>Sobre nós</Link>
              </li>
              <>
                {isLogged ? (
                  <>
                    <li>
                      <span>100g</span>
                    </li>
                    <li>
                      <StyledNavButton onClick={() => setIsLogged(false)}>
                        <img src={iconUserHeader} alt="" />
                      </StyledNavButton>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button
                      width={100}
                      onClick={() => navigate("/login", { replace: true })}
                      // onClick={() => setIsLogged(true)}
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
      {isModalHeader && <ModalHeader />}
      {isModalDice && <DiceRoll />}
    </>
  );
};

export default Header;
