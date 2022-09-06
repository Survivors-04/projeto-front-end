import { useContext, useEffect, useState } from "react";
import Modal from "../ModalBase";
import { ModalContext } from "../../../Context/ModalContext";
import Button from "../../Button";
import { StyledModalHome } from "./styled";
import apiPokemonList from "../../../services/apiPokemonList";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../../Context/UserContext";
import api from "../../../services/api";
import boosters from "../../../pages/Home/boosters";

interface iModalHome {
  boosterTitle: string;
  boosterPrice: number;
}

export interface iPokemon {
  Pokemon: string;
  Rarity: string;
  Number: number;
  Type01: string;
  Type02: string;
  id: string | number;
  userId: string | number;
  price: number;
}

export const ModalHome = ({ boosterTitle, boosterPrice }: iModalHome) => {
  const { setisModalHome } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  const [pokemonsResult, setPokemonsResult] = useState<iPokemon[]>([]);
  const pokemonLimit = 6;

  useEffect(() => {
    const pokelist = async () => {
      const pokemonList = await apiPokemonList();
      const pokemonData: iPokemon[] = pokemonList?.data;
      const pokemonFiltered: iPokemon[] = [];
      const pokemonArry: iPokemon[] = [];

      const pokemonCommon = pokemonData.filter(
        (pokemon) => pokemon.Rarity === "Common"
      );

      const pokemonRare = pokemonData.filter(
        (pokemon) => pokemon.Rarity === "Rare"
      );

      const pokemonEpic = pokemonData.filter(
        (pokemon) => pokemon.Rarity === "Epic"
      );

      const pokemonLegendary = pokemonData.filter(
        (pokemon) => pokemon.Rarity === "Legendary"
      );

      pokemonCommon.forEach((pokemon) => pokemonFiltered.push(pokemon));
      pokemonRare.forEach((pokemon) => pokemonFiltered.push(pokemon));

      if (boosterTitle !== boosters[0].title) {
        pokemonEpic.forEach((pokemon) => pokemonFiltered.push(pokemon));
      }
      if (boosterTitle === boosters[2].title) {
        pokemonLegendary.forEach((pokemon) => pokemonFiltered.push(pokemon));
      }

      const getrandom = () => {
        for (let i = 0; i < pokemonLimit; i++) {
          const pokemonID = uuidv4();
          const pokemon =
            pokemonFiltered[Math.floor(Math.random() * pokemonFiltered.length)];

          pokemon.id = pokemonID;
          pokemon.userId = user.id;

          pokemonArry.push(pokemon);
        }
      };
      getrandom();

      setPokemonsResult(pokemonArry);
    };

    pokelist();
  }, [user.id, boosterPrice, boosterTitle]);

  useEffect(() => {
    const addPokemon = async (pokemon: iPokemon) => {
      try {
        await api.post(`/Users/${user.id}/pokedexUser`, pokemon);
      } catch (err) {
        console.log(err);
      }
    };

    pokemonsResult.forEach(async (pokemon) => await addPokemon(pokemon));
  }, [pokemonsResult, user.id]);

  return (
    <>
      <Modal setIs={setisModalHome}>
        <StyledModalHome>
          <h2>Recompensas</h2>
          {pokemonsResult.map(({ Pokemon, id }) => (
            <li key={id}>
              <img
                src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${Pokemon.toLowerCase()}.gif`}
                alt={Pokemon}
              />
              <h3>{Pokemon}</h3>
            </li>
          ))}
          <Button width={60} onClick={() => setisModalHome(false)}>
            Confirmar
          </Button>
        </StyledModalHome>
      </Modal>
    </>
  );
};
