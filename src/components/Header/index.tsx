import { Nav, StyledContainer, StyledDiv, StyledNavButton } from "./style";
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
              <StyledNavButton onClick={() => setIsModalDice(true)}>Recompensa</StyledNavButton>
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
                    <button onClick={() => setIsLogged(false)}>
                      <img src={iconUserHeader} alt="" />
                    </button>
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
                  {/* <Link to={"/login"}>Login</Link> */}
                </li>
              )}
            </>
          </ul>
        </Nav>
      </StyledContainer>
      {isModalDice && <DiceRoll />}
    </>
  );
};

export default Header;
