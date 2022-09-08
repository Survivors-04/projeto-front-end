import Header from "../../components/Header";
import {
  StyledContainer,
  StyledContainerWelcome,
  StyledContentInfoHeader,
  StyledWelcome,
} from "./style";
import gifWelcome from "../../assets/imgs/Help/gifWelcome.gif";
import { useState } from "react";
import AnimationPages from "../../components/AnimationPages";
import AnimationListHelp from "../../components/AnimationListHelp";

const Help = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [isInit, setIsInit] = useState(false);
  const [isReward, setIsReward] = useState(false);
  const [isMarketplace, setIsMarketplace] = useState(false);
  const [isAboutUs, setIsAboutUs] = useState(false);
  return (
    <AnimationPages>
      <Header />
      <StyledContainerWelcome>
        <StyledWelcome>
          <img src={gifWelcome} alt="Pokemon" />
          <p>
            Caso tenha dúvidas ou queira entender como esse site funciona fique
            aqui e entenda tudo!
          </p>
        </StyledWelcome>

        <StyledContentInfoHeader>
          <StyledContainer>
            <div>
              <button onClick={() => setIsProfile(!isProfile)}>Perfil</button>
              {isProfile && (
                <AnimationListHelp>
                  <ul>
                    <li>No perfil você pode:</li>
                    <li>Ver todas as suas informações</li>
                    <li>Ver toda a sua coleção de cards</li>
                    <li>
                      Adicionar um card ao mercado para à venda caso deseje.
                    </li>
                  </ul>
                </AnimationListHelp>
              )}
            </div>
            <div>
              <button onClick={() => setIsInit(!isInit)}>Início</button>
              {isInit && (
                <AnimationListHelp>
                  <ul>
                    <li>
                      O inicio é a página principal, onde você poderá comprar
                      pacotinhos de cards pokemon, nesse pacote irá vir 6 cards
                      aleatóriamente.
                    </li>
                  </ul>
                </AnimationListHelp>
              )}
            </div>
            <div>
              <button onClick={() => setIsReward(!isReward)}>Recompensa</button>
              {isReward && (
                <AnimationListHelp>
                  <ul>
                    <li>
                      Ao clicar em recompensa você poderá rolar um dado a cada
                      24 horas e receber de 1 a 100 de ouro de acordo com a sua
                      sorte :)
                    </li>
                  </ul>
                </AnimationListHelp>
              )}
            </div>
            <div>
              <button onClick={() => setIsMarketplace(!isMarketplace)}>
                Mercado
              </button>
              {isMarketplace && (
                <AnimationListHelp>
                  <ul>
                    <li>
                      No mercado você pode comprar e vender cards pokemons,
                      compre os cards que desejar ou venda alguns!
                    </li>
                    <li>Aumente sua coleção!</li>
                  </ul>
                </AnimationListHelp>
              )}
            </div>
            <div>
              <button onClick={() => setIsAboutUs(!isAboutUs)}>
                Sobre nós
              </button>
              {isAboutUs && (
                <AnimationListHelp>
                  <ul>
                    <li>
                      Na página sobre nós você verá um pouco sobre a equipe
                      idealizadora e desenvolvedora deste projeto!
                    </li>
                  </ul>
                </AnimationListHelp>
              )}
            </div>
          </StyledContainer>
        </StyledContentInfoHeader>
      </StyledContainerWelcome>
    </AnimationPages>
  );
};

export default Help;
