import { StyledContainer } from "./style";
import logoHeader from "../../assets/imgs/HeaderSvg/iconUserHeader.svg";
import menuLogo from "../../assets/imgs/HeaderSvg/menu.svg";
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
        {/* {isOpen && <Modal />} */}
      </div>
    </StyledContainer>
  );
};

export default Header;
