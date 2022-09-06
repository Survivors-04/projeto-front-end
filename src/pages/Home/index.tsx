import StyledContainer from "../../components/Container/styles";
import { StyledBoosterList } from "./styles";
import boosters from "./boosters";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { ModalContext } from "../../Context/ModalContext";
import { ModalHome } from "../../components/Modal/ModalHome";
import ModalConfirm from "../../components/Modal/ModalConfirm";
import AnimationPages from "../../components/AnimationPages";

const Home = () => {
  const { isModalHome, setisModalHome, isModalConfirm, setIsModalConfirm } =
    useContext(ModalContext);
  const [boosterTitle, setBoosterTitle] = useState("");
  const [boosterPrice, setBoosterPrice] = useState(0);

  const submitBuy = (title: string, price: number) => {
    setBoosterTitle(title);
    setBoosterPrice(price);

    setIsModalConfirm(true);
  };

  return (
    <AnimationPages>
      <Header />
      {isModalHome && (
        <ModalHome boosterTitle={boosterTitle} boosterPrice={boosterPrice} />
      )}
      {isModalConfirm && (
        <ModalConfirm boosterTitle={boosterTitle} boosterPrice={boosterPrice} />
      )}
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
                    <Button width={100} onClick={() => submitBuy(title, price)}>
                      Comprar
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))}
        </StyledBoosterList>
      </StyledContainer>
    </AnimationPages>
  );
};
export default Home;
