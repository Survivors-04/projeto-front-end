import StyledContainer from "../../components/Container/styles";
import Header from "../../components/Header";
import imgAsh from "../../assets/imgs/Profile/ash 1.svg";
import imgCharmander from "../../assets/imgs/Profile/Charmander.svg";
import { StyledCharmImg, StyledDiv, StyledList, StyledSection } from "./styles";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { StyledParagraph } from "../../components/TypePokemonParagraph/styles";
import { StyledSpan } from "../../components/TypePokemonSpan/styles";
import AnimationPages from "../../components/AnimationPages";

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
  id: number | string;
}

interface IInputValue {
  str: string;
}

const Profile = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [countCommons, setCountCommons] = useState(0);
  const [countRares, setCountRares] = useState(0);
  const [countEpics, setCountEpics] = useState(0);
  const [countLegendary, setCountLegendary] = useState(0);
  const { user } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState<IPokemons[]>([]);

  useEffect(() => {
    api.get(`/Users/${user.id}/pokedexUser`).then((response) => {
      setPokemons(response.data);
    });
  }, [user.id]);

  useEffect(() => {
    const countRares = () => {
      let countRaresPokemons = pokemons.filter(
        (pokemon) => pokemon.Rarity === "Rare"
      ).length;
      setCountRares(countRaresPokemons);
    };
    countRares();
  }, [pokemons]);

  useEffect(() => {
    const countCommons = () => {
      let countCommonsPokemons = pokemons.filter(
        (pokemon) => pokemon.Rarity === "Common"
      ).length;
      setCountCommons(countCommonsPokemons);
    };
    countCommons();
  }, [pokemons]);

  useEffect(() => {
    const countEpics = () => {
      let countEpicsPokemons = pokemons.filter(
        (pokemon) => pokemon.Rarity === "Epic"
      ).length;
      setCountEpics(countEpicsPokemons);
    };
    countEpics();
  }, [pokemons]);

  useEffect(() => {
    const countLegendary = () => {
      let countLegendaryPokemons = pokemons.filter(
        (pokemon) => pokemon.Rarity === "Legendary"
      ).length;
      setCountLegendary(countLegendaryPokemons);
    };
    countLegendary();
  }, [pokemons]);

  const showProducts = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const filteredInput = (str: string) => {
    let search = str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const filter = pokemons.filter((poke) => {
      let name = poke.Pokemon.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      let rarity = poke.Rarity.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      let type01 = poke.Type01.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      let type02 = poke.Type02.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      if (
        name.includes(search) ||
        rarity.includes(search) ||
        type01.includes(search) ||
        type02.includes(search)
      ) {
        return poke;
      }
    });

    setPokemonsFiltered(filter);
  };

  return (
    <>
      <AnimationPages>
        <Header />
        <StyledContainer>
          <StyledSection>
            <StyledDiv>
              <figure>
                <img src={imgAsh} alt="" />
              </figure>

              <ul>
                <li>{user.name}</li>
                <li>Coleção: {pokemons.length}</li>
                <li>Comuns: {countCommons}</li>
                <li>Raros: {countRares}</li>
                <li>Épicos: {countEpics}</li>
                <li>Lendários: {countLegendary}</li>
                <li>
                  Moedas: <span>{user.gold}</span>
                </li>
              </ul>
            </StyledDiv>
            <StyledCharmImg src={imgCharmander} alt="" />

            <form onSubmit={showProducts}>
              <input
                type="text"
                placeholder="Pesquisar Pokemon..."
                onChange={(event) => {
                  setUserInput(event.target.value);
                  filteredInput(userInput);
                }}
              />
            </form>

            <StyledList>
             
              <form className="form" onSubmit={showProducts}>
                <input
                  type="text"
                  placeholder="Pesquisar Pokemon..."
                  onChange={(event) => {
                    setUserInput(event.target.value);
                    filteredInput(userInput);
                  }}
                />
              </form>
              ) : (
                <></>
              )}
              {pokemonsFiltered.length === 0
                ? pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                      <figure>
                        <img
                          src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.Pokemon.toLowerCase()}.gif`}
                          alt={pokemon.Pokemon}
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
                  ))
                : pokemonsFiltered.map((pokemon) => (
                    <li key={pokemon.id}>
                      <figure>
                        <img
                          src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.Pokemon.toLowerCase()}.gif`}
                          alt={pokemon.Pokemon}
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
              {pokemons.length < 1 && (
                <h2>Você ainda não possui pokemons em sua coleção </h2>
              )}
            </StyledList>
          </StyledSection>
        </StyledContainer>
      </AnimationPages>
    </>
  );
};

export default Profile;
