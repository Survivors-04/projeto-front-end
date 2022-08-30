import { Nav, StyledContainer } from "./style";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";
import iconUserHeader from "../../assets/imgs/HeaderSvg/iconUserHeader.svg";
import menuLogo from "../../assets/imgs/HeaderSvg/menu.svg";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer>
      <div>
        <img src={logoHeader} alt="" className="logoGroup" />

        <button onClick={() => setIsOpen(!isOpen)} className="button-menu">
          <img src={menuLogo} alt="" />
        </button>

        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>

      <Nav>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Recompensa</a>
          </li>
          <li>
            <a href="/">Mercado</a>
          </li>
          <li>
            <a href="/">Ajuda</a>
          </li>
          <li>
            <a href="/">Sobre nós</a>
          </li>
          <li>
            {isLogged && <span>100g</span>}
            {isLogged ? (
              <button>
                <img src={iconUserHeader} alt="" />
              </button>
            ) : (
              <a href="/">Login</a>
            )}
          </li>
        </ul>
      </Nav>
    </StyledContainer>
  );
};

export default Header;
