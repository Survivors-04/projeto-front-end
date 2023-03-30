import StyledContainer from "../../components/Container/styles";
import { StyledBoosterList, StyledInfo, StyledInfoContainer } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { ModalHome } from "../../components/Modal/ModalHome";
import ModalConfirm from "../../components/Modal/ModalConfirm";
import AnimationPages from "../../components/AnimationPages";
import ModalInfo from "../../components/Modal/ModalInfo";
import apiBoostersList from "../../services/boosters/apiGetBoosters";
import booster_01 from "../../assets/imgs/boosters/booster_01.png";
import booster_02 from "../../assets/imgs/boosters/booster_02.png";
import booster_03 from "../../assets/imgs/boosters/booster_03.png";
import booster_04 from "../../assets/imgs/boosters/booster_04.png";
import { iBooster } from "../../interfaces/booster";

const Home = () => {
  const { isModalHome, isModalConfirm, setIsModalConfirm } =
    useContext(ModalContext);
  const { isModalInfo, setIsModalInfo } = useContext(ModalContext);
  const [boosterName, setBoosterName] = useState("");
  const [boosterId, setBoosterId] = useState("");
  const [boosterPrice, setBoosterPrice] = useState(0);
  const [boostersAvaiable, setBoostersAvaiable] = useState<iBooster[]>([]);

  const submitBuy = (title: string, price: number, id: string) => {
    setBoosterName(title);
    setBoosterPrice(price);
    setBoosterId(id);

    setIsModalConfirm(true);
  };

  useEffect(() => {
    const getBoosters = async () => {
      const boosters: iBooster[] = await apiBoostersList();

      setBoostersAvaiable(boosters);
    };

    getBoosters();
  }, []);

  const boostersImgUrl = [booster_01, booster_02, booster_03, booster_04];

  return (
    <AnimationPages>
      <Header />
      {isModalHome && <ModalHome boosterId={boosterId} />}
      {isModalConfirm && (
        <ModalConfirm boosterTitle={boosterName} boosterPrice={boosterPrice} />
      )}
      {isModalInfo && <ModalInfo />}
      <StyledContainer>
        <StyledBoosterList>
          {boostersAvaiable.map(({ price, name, id }, index) => (
            <li key={index}>
              <img src={boostersImgUrl[index]} alt={name} />
              <div>
                <h3>{name}</h3>
                {price && (
                  <>
                    <p>
                      preço: <span>{`${price}g`}</span>
                    </p>
                    <Button
                      transform="none"
                      onClick={() => submitBuy(name, price, id)}
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
          <Button max_width={380} onClick={() => setIsModalInfo(true)}>
            Mais informações
          </Button>
        </StyledInfo>
      </StyledInfoContainer>
    </AnimationPages>
  );
};
export default Home;
