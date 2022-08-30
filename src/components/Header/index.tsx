import { Container } from "./style";
import iconUserHeader from "../../assets/imgs/iconUserHeader.svg";
import logoHeader from "../../assets/imgs/logoHeader.svg";

const Header = () => {
  return (
    <Container>
      <div>
        <img src={logoHeader} alt="" />
        <nav>
          <a href="">Início</a>
          <a href="">Recompensa</a>
          <a href="">Mercado</a>
          <a href="">Ajuda</a>
          <a href="">Sobre Nós</a>
        </nav>
        <span>100g</span>
        <button>
          <img src={iconUserHeader} alt="" />
        </button>
      </div>
    </Container>
  );
};

export default Header;
