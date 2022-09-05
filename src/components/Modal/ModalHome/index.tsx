import { useContext, useEffect, useState } from "react";
import Modal from "../ModalBase";
import { ModalContext } from "../../../Context/ModalContext";
import Button from "../../Button";
import { StyledModalHome } from "./styled";
import apiPokemonList from "../../../services/apiPokemonList";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../../Context/UserContext";
import api from "../../../services/api";

interface iPokemon {
  Pokemon: string;
  Rarity: string;
  Number: number;
  Type01: string;
  Type02: string;
  userId: number;
  id: string | number;
}

export const ModalHome = () => {
  const { setisModalHome } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  const [teste, setTeste] = useState<iPokemon[]>([]);
  const pokemonLimit = 6;

  useEffect(() => {
    const pokelist = async () => {
      const pokemonList = await apiPokemonList();
      const pokemonData = pokemonList?.data;
      const pokemonArry: iPokemon[] = [];

      const getrandom = () => {
        for (let i = 0; i < pokemonLimit; i++) {
          const pokemonID = uuidv4();
          const pokemon =
            pokemonData[Math.floor(Math.random() * pokemonData.length)];

          pokemon.id = pokemonID;
          pokemon.userId = user.id;

          // console.log(pokemon);
          pokemonArry.push(pokemon);
        }
      };
      getrandom();

      setTeste(pokemonArry);
    };

    pokelist();
  }, [user.id]);

  useEffect(() => {
    const first = async (pokemon: iPokemon) => {
      try {
        const response = await api.post(
          `/Users/${user.id}/pokedexUser`,
          pokemon
        );

        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    teste.forEach(async (poke) => await first(poke));
  }, [teste, user.id]);

  return (
    <>
      <Modal setIs={setisModalHome}>
        <StyledModalHome>
          <h2>Recompensas</h2>
          {teste.map(({ Pokemon }, index) => (
            <li key={index}>
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
