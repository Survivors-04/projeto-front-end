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
import { toast } from "react-toastify";

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

  const newPokemon = (
    Pokemon: string,
    Rarity: string,
    Number: number,
    Type01: string,
    Type02: string,
    id: string | number,
    userId: string | number,
    price: number
  ) => {
    return {
      Pokemon: Pokemon,
      Rarity: Rarity,
      Number: Number,
      Type01: Type01,
      Type02: Type02,
      id: id,
      userId: userId,
      price: price,
    };
  };

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

      const getRandom = (chanceArray: iPokemon[]) => {
        const pokemonId = uuidv4();

        const randomPokemon =
          chanceArray[Math.floor(Math.random() * chanceArray.length)];

        const { Pokemon, Rarity, Number, Type01, Type02 } = randomPokemon;

        const pokemon = newPokemon(
          Pokemon,
          Rarity,
          Number,
          Type01,
          Type02,
          pokemonId,
          user.id,
          0
        );

        pokemonArry.push(pokemon);
      };

      const chancePokemon = () => {
        for (let i = 0; i < 6; i++) {
          const chance = Math.random() * 100;

          const chanceArray: iPokemon[] = [];

          if (boosterTitle === boosters[0].title) {
            if (chance <= 75) {
              pokemonCommon.forEach((pokemon) => chanceArray.push(pokemon));
            } else {
              pokemonRare.forEach((pokemon) => chanceArray.push(pokemon));
            }
          }

          if (boosterTitle === boosters[1].title) {
            if (chance <= 60) {
              pokemonCommon.forEach((pokemon) => chanceArray.push(pokemon));
            } else if (chance <= 75 && chance <= 95) {
              pokemonRare.forEach((pokemon) => chanceArray.push(pokemon));
            } else {
              pokemonEpic.forEach((pokemon) => chanceArray.push(pokemon));
            }
          }

          if (boosterTitle === boosters[2].title) {
            if (chance <= 55) {
              pokemonCommon.forEach((pokemon) => chanceArray.push(pokemon));
            } else if (chance <= 56 && chance <= 94) {
              pokemonRare.forEach((pokemon) => chanceArray.push(pokemon));
            } else if (chance <= 95 && chance <= 99) {
              pokemonEpic.forEach((pokemon) => chanceArray.push(pokemon));
            } else {
              pokemonLegendary.forEach((pokemon) => chanceArray.push(pokemon));
            }
          }

          getRandom(chanceArray);
        }
      };
      chancePokemon();

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

    toast.success("Pokemons adicionados a sua coleção");
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
                src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                  Pokemon === "Nidoran-M"
                    ? "nidorino"
                    : Pokemon === "Nidoran-F"
                    ? "nidorina"
                    : Pokemon === "Mr.Mime"
                    ? "mr._mime"
                    : Pokemon.toLowerCase()
                }.gif`}
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
