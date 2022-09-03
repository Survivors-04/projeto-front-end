import { useContext, useEffect, useState } from "react";
import Modal from "../ModalBase";
import { ModalContext } from "../../../Context/ModalContext";
import Button from "../../Button";
import { StyledModalHome } from "./styled";
import apiPokemonList from "../../../services/apiPokemonList";
import { v4 as uuidv4 } from "uuid";

interface iPokemon {
  Pokemon: string;
  id: number;
}

export const ModalHome = () => {
  const { setisModalHome } = useContext(ModalContext);
  const [teste, setTeste] = useState<iPokemon[]>([]);
  const boosterLimit = 6;

  useEffect(() => {
    const pokelist = async () => {
      const pokemonList = await apiPokemonList();
      const pokemonData = pokemonList?.data;
      const pokemonArry: iPokemon[] = [];

      const getrandom = () => {
        for (let i = 0; i < boosterLimit; i++) {
          const pokemonID = uuidv4();
          const pokemon =
            pokemonData[Math.floor(Math.random() * pokemonData.length)];
          pokemon.id = pokemonID;
          pokemonArry.push(pokemon);
        }
      };
      getrandom();

      console.log(pokemonArry);
      setTeste(pokemonArry);
    };

    pokelist();
  }, []);

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
