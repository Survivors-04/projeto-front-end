import StyledContainer from "../../components/Container/styles";
import Header from "../../components/Header";
import imgPikachu from "../../assets/imgs/Profile/pikachu 1.svg";
import imgBulba from "../../assets/imgs/Profile/bulbasaur2 1.svg";
import imgAsh from "../../assets/imgs/Profile/ash 1.svg";
import imgCharmander from "../../assets/imgs/Profile/Charmander.svg";
import { StyledCharmImg, StyledDiv, StyledList, StyledSection } from "./styles";

const Profile = () => {
  const colection = [
    {
      name: "Pikachu",
      class: "Elétrico",
      rarity: "Comum",
    },
    {
      name: "Pikachu",
      class: "Elétrico",
      rarity: "Comum",
    },
    {
      name: "Bulbasaur",
      class: ["Grama", "Veneno"],
      rarity: "Comum",
    },
    {
      name: "Bulbasaur",
      class: ["Àgua", "Pedra"],
      rarity: "Comum",
    },
    {
      name: "Pikachu",
      class: "Elétrico",
      rarity: "Comum",
    },
    {
      name: "Pikachu",
      class: "Elétrico",
      rarity: "Comum",
    },
  ];

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledSection>
          <StyledDiv>
            <figure>
              <img src={imgAsh} alt="" />
            </figure>

            <ul>
              <li>Ash</li>
              <li>Coleção: 15</li>
              <li>Raros: 2</li>
              <li>
                Moedas: <span>100g</span>
              </li>
            </ul>
          </StyledDiv>
          <StyledCharmImg src={imgCharmander} alt="" />

          <form>
            <input
              type="text"
              placeholder="Pesquisar Pokemon..."
              onChange={() => {}}
            />
          </form>

          <StyledList>
            <form className="form">
              <input
                type="text"
                placeholder="Pesquisar Pokemon..."
                onChange={() => {}}
              />
            </form>
            {colection.length >= 1 &&
              colection.map((pokemon, index) => (
                <li key={index}>
                  <figure>
                    <img
                      src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.name.toLowerCase()}.gif`}
                      alt=""
                    />
                  </figure>

                  <h3>{pokemon.name}</h3>
                  <p>{pokemon.class}</p>
                  <p>{pokemon.rarity}</p>
                </li>
              ))}
          </StyledList>
        </StyledSection>
      </StyledContainer>
    </>
  );
};

export default Profile;
