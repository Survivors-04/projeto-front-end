import StyledContainer from "../../components/Container/styles";
import Header from "../../components/Header";
import imgPikachu from "../../assets/imgs/Profile/pikachu 1.svg";
import imgBulba from "../../assets/imgs/Profile/bulbasaur2 1.svg";
import imgAsh from "../../assets/imgs/Profile/ash 1.svg";
import imgCharmander from "../../assets/imgs/Profile/Charmander.svg";
import { StyledCharmImg, StyledDiv, StyledList, StyledSection } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";

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
  const [userName, setUserName] = useState("");
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  const data = {
    email: "teste5@gamil.com",
    password: "123456",
  };

  useEffect(() => {
    api.get("/Users/5/pokedexUser").then((response) => {
      setPokemons(response.data);
    });
  }, [pokemons]);

  const login = (data: IData) => {
    api.post("/login", data).then((response) => {
      window.localStorage.setItem("@TOKEN", response.data.accessToken);
      setUserName(response.data.user.name);
    });
  };

  login(data);

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
              <li>{userName}</li>
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
                  <p>{pokemon.Type01}</p>
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
