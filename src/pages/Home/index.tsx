import StyledContainer from "../../components/Container/styles";
import { StyledBoosterList, StyledInfo, StyledInfoContainer } from "./styles";
import boosters from "./boosters";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { ModalContext } from "../../Context/ModalContext";
import { ModalHome } from "../../components/Modal/ModalHome";
import ModalConfirm from "../../components/Modal/ModalConfirm";
import AnimationPages from "../../components/AnimationPages";
import ModalInfo from "../../components/Modal/ModalInfo";

const Home = () => {
  const { isModalHome, isModalConfirm, setIsModalConfirm } =
    useContext(ModalContext);
  const { isModalInfo, setIsModalInfo } = useContext(ModalContext);
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
      {isModalInfo && <ModalInfo />}
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
                    <Button
                      transform="none"
                      onClick={() => submitBuy(title, price)}
                    >
                      Comprar
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))}
        </StyledBoosterList>
      </StyledContainer>

      <StyledInfoContainer>
        <StyledInfo>
          <h3>Informações</h3>
          <ul>
            <li>
              Aqui você consegue comprar pacotes para aumentar a sua coleção de
              pokemons, cada um dos pacotes dão um total de 6 Pokemons (podendo
              conter repetidos).
            </li>
            <li>
              No <span>#Pacote_01</span> possui Pokemons da primeira evolução
              <span> (comuns) </span> até os da segunda evolução
              <span> (raros)</span>, com chances muito grandes de vir um Pokemon
              <span> comum</span>.
            </li>
            <li>
              No <span>#Pacote_02</span> as chances de vir um Pokemon comum
              diminui e os <span> raros</span> aumentam consideravelmente, sem
              contar que também permite que você tenha chance de conseguir um
              pokemon da terceira evolução <span> (épico)</span>.
            </li>
            <li>
              No <span>#Pacote_03</span> em comparação com o
              <span> #Pacote_01</span> os <span> comuns</span> tem uma grande
              diminuida na chance de conseguir, um pequeno aumento nos
              <span> raros</span> e libera a possibilidade de desbloquear os
              Pokemons <span> lendários</span>.
            </li>
          </ul>
          <Button max_width={380} onClick={() => setIsModalInfo(true)}> Mais informações </Button>
        </StyledInfo>
      </StyledInfoContainer>
    </AnimationPages>
  );
};
export default Home;
