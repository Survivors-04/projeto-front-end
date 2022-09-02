import StyledContainer from "../../components/Container/styles";
import Header from "../../components/Header";
import imgPikachu from "../../assets/imgs/Profile/pikachu 1.svg";
import imgBulba from "../../assets/imgs/Profile/bulbasaur2 1.svg";
import imgAsh from "../../assets/imgs/Profile/ash 1.svg";
import imgCharmander from "../../assets/imgs/Profile/Charmander.svg";
import { StyledCharmImg, StyledDiv, StyledList, StyledSection } from "./styles";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { StyledParagraph } from "../../components/TypePokemonParagraph/styles";
import { StyledSpan } from "../../components/TypePokemonSpan/styles";

interface IData {
  email: string;
  password: string;
}

interface IPokemons {
  Pokemon: string;
  Rarity: string;
  Number: number;
  Type01: string;
  Type02: string;
  userId: number;
  id: number;
}

const Profile = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    api.get(`/Users/${user.id}/pokedexUser`).then((response) => {
      setPokemons(response.data);
    });
  }, [pokemons]);

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
              <li>{user.name}</li>
              <li>Coleção: 15</li>
              <li>Raros: 2</li>
              <li>
                Moedas: <span>{user.gold}</span>
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
            {pokemons.length >= 1 &&
              pokemons.map((pokemon, index) => (
                <li key={index}>
                  <figure>
                    <img
                      src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.Pokemon.toLowerCase()}.gif`}
                      alt=""
                    />
                  </figure>

                  <h3>{pokemon.Pokemon}</h3>

                  <div>
                    <StyledParagraph
                      backgroundColor={`var(--color-type-${pokemon.Type01.toLowerCase()})`}
                    >
                      {pokemon.Type01}
                    </StyledParagraph>
                    {pokemon.Type02 !== "null" ? (
                      <StyledSpan
                        backgroundColor={`var(--color-type-${pokemon.Type02.toLowerCase()})`}
                      >
                        {pokemon.Type02}
                      </StyledSpan>
                    ) : (
                      <></>
                    )}
                  </div>
                  <p>{pokemon.Rarity}</p>
                </li>
              ))}
          </StyledList>
        </StyledSection>
      </StyledContainer>
    </>
  );
};

export default Profile;
