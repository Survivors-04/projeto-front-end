import { useEffect, useRef, useState } from "react";
import iconUserHeader from "../../assets/imgs/iconUserHeader.svg";
import { StyledDiv } from "./style";

interface IModal {
  setIsOpen: (open: boolean) => void;
}

export interface IEvent {
  type: string;
  target: HTMLDivElement | any;
}

const Modal = ({ setIsOpen }: IModal) => {
  const [isLogged, setIsLogged] = useState(false);
  const modalRef = useRef<null | HTMLParagraphElement>(null);

  useEffect(() => {
    function handleOutClick(event: IEvent) {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <StyledDiv>
      <ul className="menu">
        <li>
          <button>Início</button>
        </li>
        <li>
          <button>Recompensa</button>
        </li>
        <li>
          <button>Mercado</button>
        </li>
        <li>
          <button>Ajuda</button>
        </li>
        <li>
          <button>Sobre nós</button>
        </li>
        {isLogged && <span>100g</span>}
        {isLogged ? (
          <button>
            <img src={iconUserHeader} alt="" />
          </button>
        ) : (
          <button>Login</button>
        )}
      </ul>
    </StyledDiv>
  );
};

export default Modal;
