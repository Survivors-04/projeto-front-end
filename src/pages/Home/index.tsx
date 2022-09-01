import StyledContainer from "../../components/Container/styles";
import { StyledBoosterList } from "./styles";
import boosters from "./boosters";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import { ModalHome } from "../../components/Modal/ModalHome";

const Home = () => {
  const { isModalHome, setisModalHome } = useContext(ModalContext);

  return (
    <>
      <Header />
      {isModalHome && <ModalHome />}
      <StyledContainer>
        <StyledBoosterList>
          {boosters.map(({ imgUrl, title, price }, index) => (
            <li key={index}>
              <img src={imgUrl} alt={title} />
              <div>
                <h3>{title}</h3>
                {price && (
                  <>
                    <p>
                      preço: <span>{`${price}g`}</span>
                    </p>
                    <Button width={100} onClick={() => setisModalHome(true)}>
                      Comprar
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))}
        </StyledBoosterList>
      </StyledContainer>
    </>
  );
};
export default Home;
