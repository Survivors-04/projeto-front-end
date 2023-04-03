import StyledContainer from "../../components/Container/styles";
import Header from "../../components/Header";
import imgAsh from "../../assets/imgs/Profile/ash 1.svg";
import imgCharmander from "../../assets/imgs/Profile/Charmander.svg";
import { StyledCharmImg, StyledDiv, StyledList, StyledSection } from "./styles";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { StyledParagraph } from "../../components/TypePokemonParagraph/styles";
import { StyledSpan } from "../../components/TypePokemonSpan/styles";
import Button from "../../components/Button";
import ModalSell from "../../components/Modal/ModalSell";
import { ModalContext } from "../../context/ModalContext";
import AnimationPages from "../../components/AnimationPages";
import apiReadPokemonUser from "../../services/pokemons/apiReadPokemonUser";
import { iPokemonUser } from "../../interfaces/pokemons";

const Profile = () => {
  const [pokemons, setPokemons] = useState<iPokemonUser[]>([]);
  const [countCommons, setCountCommons] = useState(0);
  const [countRares, setCountRares] = useState(0);
  const [pokemonSell, setPokemonSell] = useState({} as iPokemonUser);
  const { isModalSell, setIsModalSell } = useContext(ModalContext);
  const [countEpics, setCountEpics] = useState(0);
  const [countLegendary, setCountLegendary] = useState(0);
  const { user } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState<iPokemonUser[]>([]);
  const [refreshKey, setrefreshKey] = useState(0);

  useEffect(() => {
    apiReadPokemonUser(user.id).then((response) => {
      const pokemonFilter = response.filter(
        (pokemon) => pokemon.on_marketplace === false
      );
      setPokemons(pokemonFilter);
    });
  }, [user.id, refreshKey]);

  useEffect(() => {
    const countRares = () => {
      let countRaresPokemons = pokemons.filter(
        (pokemon) => pokemon.rarity === "R"
      ).length;
      setCountRares(countRaresPokemons);
    };
    const countCommons = () => {
      let countCommonsPokemons = pokemons.filter(
        (pokemon) => pokemon.rarity === "C"
      ).length;
      setCountCommons(countCommonsPokemons);
    };
    const countEpics = () => {
      let countEpicsPokemons = pokemons.filter(
        (pokemon) => pokemon.rarity === "E"
      ).length;
      setCountEpics(countEpicsPokemons);
    };
    const countLegendary = () => {
      let countLegendaryPokemons = pokemons.filter(
        (pokemon) => pokemon.rarity === "L"
      ).length;
      setCountLegendary(countLegendaryPokemons);
    };

    countRares();
    countCommons();
    countEpics();
    countLegendary();
  }, [pokemons]);

  useEffect(() => {
    const filteredInput = (str: string) => {
      let search = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const filter = pokemons.filter((poke) => {
        let name = poke.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let rarity = poke.rarity
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        let type_1 = poke.type_1
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        // let type_2 = "";

        // if (type_2 !== null) {
        //   type_2 = poke
        //     .type_2!.normalize("NFD")
        //     .replace(/[\u0300-\u036f]/g, "")
        //     .toLowerCase();
        // }

        if (
          name.includes(search) ||
          rarity.includes(search) ||
          type_1.includes(search)
          // type_2.includes(search)
        ) {
          return poke;
        }
      });

      setPokemonsFiltered(filter);
    };

    filteredInput(userInput);
  }, [userInput, pokemons]);

  const showProducts = (event: { preventDefault: () => void }) => {
    event.preventDefault();
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
                <li>
                  {user.first_name} {user.last_name}
                </li>

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
                value={userInput}
                onChange={(event) => {
                  setUserInput(event.target.value);
                }}
              />
            </form>

            <StyledList>
              {pokemons.length >= 1 && (
                <form className="form" onSubmit={showProducts}>
                  <input
                    type="text"
                    placeholder="Pesquisar Pokemon..."
                    value={userInput}
                    onChange={(event) => {
                      setUserInput(event.target.value);
                    }}
                  />
                </form>
              )}
              {userInput.trim().length === 0
                ? pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                      <figure>
                        <img
                          src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                            pokemon.name === "Nidoran-M"
                              ? "nidorino"
                              : pokemon.name === "Nidoran-F"
                              ? "nidorina"
                              : pokemon.name === "Mr.Mime"
                              ? "mr._mime"
                              : pokemon.name.toLowerCase()
                          }.gif`}
                          alt={pokemon.name}
                        />
                      </figure>

                      <h3>{pokemon.name}</h3>

                      <div>
                        <StyledParagraph
                          backgroundColor={`var(--color-type-${pokemon.type_1.toLowerCase()})`}
                        >
                          {pokemon.type_1.charAt(0).toUpperCase() +
                            pokemon.type_1.slice(1)}
                        </StyledParagraph>
                        {pokemon.type_2 !== null ? (
                          <StyledSpan
                            backgroundColor={`var(--color-type-${pokemon.type_2!.toLowerCase()})`}
                          >
                            {pokemon.type_2!.charAt(0).toUpperCase() +
                              pokemon.type_2!.slice(1)}
                          </StyledSpan>
                        ) : (
                          <></>
                        )}
                      </div>
                      <p>{pokemon.rarity}</p>
                      <Button
                        width={80}
                        hover={"var(--color-yellow-focus)"}
                        onClick={() => {
                          setIsModalSell(true);

                          pokemon.price = 0;
                          setPokemonSell(pokemon);
                        }}
                      >
                        Vender
                      </Button>
                    </li>
                  ))
                : pokemonsFiltered.map((pokemon) => (
                    <li key={pokemon.id}>
                      <figure>
                        <img
                          src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                            pokemon.name === "Nidoran-M"
                              ? "nidorino"
                              : pokemon.name === "Nidoran-F"
                              ? "nidorina"
                              : pokemon.name === "Mr.Mime"
                              ? "mr._mime"
                              : pokemon.name.toLowerCase()
                          }.gif`}
                          alt={pokemon.name}
                        />
                      </figure>

                      <h3>{pokemon.name}</h3>

                      <div>
                        <StyledParagraph
                          backgroundColor={`var(--color-type-${pokemon.type_1.toLowerCase()})`}
                        >
                          {pokemon.type_1.charAt(0).toUpperCase() +
                            pokemon.type_1.slice(1)}
                        </StyledParagraph>
                        {pokemon.type_2! !== "null" ? (
                          <StyledSpan
                            backgroundColor={`var(--color-type-${pokemon.type_2!.toLowerCase()})`}
                          >
                            {pokemon.type_2!.charAt(0).toUpperCase() +
                              pokemon.type_2!.slice(1)}
                          </StyledSpan>
                        ) : (
                          <></>
                        )}
                      </div>
                      <p>{pokemon.rarity}</p>
                      <Button
                        width={80}
                        hover={"var(--color-yellow-focus)"}
                        onClick={() => {
                          setIsModalSell(true);
                          setPokemonSell(pokemon);
                        }}
                      >
                        Vender
                      </Button>
                    </li>
                  ))}
              {pokemons.length < 1 && (
                <h2>Você ainda não possui pokemons em sua coleção </h2>
              )}
              {isModalSell && (
                <ModalSell
                  pokemonSell={pokemonSell}
                  setRefreshkey={setrefreshKey}
                />
              )}
            </StyledList>
          </StyledSection>
        </StyledContainer>
      </AnimationPages>
    </>
  );
};

export default Profile;
