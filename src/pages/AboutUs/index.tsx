import StyledContainer from "../../components/Container/styles";
import Header from "../../components/Header";
import edmarImg from "../../assets/imgs/AboutUsImgs/Edmar.jpg";
import joaoImg from "../../assets/imgs/AboutUsImgs/João.jpg";
import enriqueImg from "../../assets/imgs/AboutUsImgs/Enrique.jpg";
import gabrielImg from "../../assets/imgs/AboutUsImgs/Gabriel.jpg";
import pauloImg from "../../assets/imgs/AboutUsImgs/Paulo.jpg";
import { StyledList, StyledListParagraph, StyledMain } from "./styles";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const AboutUs = () => {
  const data = [
    {
      image: edmarImg,
      name: "Edmar",
      function: "Teach Leader",
      github: "https://github.com/Edmar-Cardoso",
      linkedin: "https://www.linkedin.com/in/edmar-cardoso-072736247/",
    },
    {
      image: joaoImg,
      name: "João",
      function: "Scrum Master",
      github: "https://github.com/reisquaza",
      linkedin: "https://www.linkedin.com/in/joaovictor-reis/",
    },
    {
      image: enriqueImg,
      name: "Enrique",
      function: "Product Owner",
      github: "https://github.com/enriquebds",
      linkedin: "https://www.linkedin.com/in/enrique-barbosa-6b3aaa22b/",
    },
    {
      image: gabrielImg,
      name: "Gabriel",
      function: "Quality Assurance",
      github: "https://github.com/GabrielOliveiraBar",
      linkedin: "https://www.linkedin.com/in/gabriel-oliveira-barbosa-/",
    },
    {
      image: pauloImg,
      name: "Paulo",
      function: "Quality Assurance",
      github: "https://github.com/ArkanumBR",
      linkedin: "https://www.linkedin.com/in/paulogustavolacerda/",
    },
  ];

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledMain>
          <StyledList>
            {data.map((dev, index) => (
              <li key={index}>
                <figure>
                  <img src={dev.image} alt="" />
                </figure>

                <h3>{dev.name}</h3>
                <p>{dev.function}</p>
                <a href={dev.github} target="_blanck">
                  <BsLinkedin /> GitHub
                </a>
                <a href={dev.linkedin} target="_blanck">
                  <BsGithub /> Linkedin
                </a>
              </li>
            ))}
          </StyledList>

          <StyledListParagraph>
            <li>
              <p>
                Este projeto foi feito por nós 4 durante no nosso período de
                estudo na Kenzie Academy Brasil durante o modulo final de
                Front-End. Nele utilizamos de tudo que aprendemos desde então e
                principalmente do utilizando React. O projeto é voltado para o
                entretenimento do usuário onde é simulado uma Pokedex do anime
                Pokemon. O usuário pode logar ou se cadastrar caso não tenha uma
                conta. Além disso o usuário pode comprar Pokemons específicos ou
                pacotes onde as recompensas são pokemons de diferentes
                categorias e raridades. Há também a Página do usuário onde ele
                pode visualizar quantos e quais pokemons ele possui. Futuramente
                pretendemos adicionar mais funcionalidades, como por exemplo,
                batalhas, novos pokemons, interação entre usuários e etc.
              </p>
            </li>
          </StyledListParagraph>
        </StyledMain>
      </StyledContainer>
    </>
  );
};

export default AboutUs;
