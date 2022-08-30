import { StyledContainer } from "./style";
import logoHeader from "../../assets/imgs/logoHeader.svg";
import menuLogo from "../../assets/imgs/menu.svg";
import { useState } from "react";
import Modal from "../Modal";

const Header = () => {
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
    </StyledContainer>
  );
};

export default Header;
