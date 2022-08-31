import { useContext } from "react";
import Modal from ".";
import { ModalContext } from "../../context/ModalContext";
import Button from "../Button";
import { StyledModalHome } from "./style";

interface iPokemon {
  pokemon: string;
  id: number;
}

const ModalHome = () => {
  const { setisModalHome } = useContext(ModalContext);
  const testeLimit = 6;

  const pokemons = [
    {
      pokemon: "Pikachu",
      id: 1,
    },
    {
      pokemon: "Bulbasaur",
      id: 2,
    },
    {
      pokemon: "Charizard",
      id: 3,
    },
    {
      pokemon: "Squirtle",
      id: 4,
    },
  ];

  const pokemonArry: iPokemon[] = [];

  const getRandomBooster = () => {
    for (let i = 0; i < testeLimit; i++) {
      const teste = pokemons[Math.floor(Math.random() * pokemons.length)];
      pokemonArry.push(teste);
    }
  };

  getRandomBooster();
  return (
    <>
      <Modal setIs={setisModalHome}>
        <StyledModalHome>
          <h2>Recompensas</h2>
          {pokemonArry.map(({ pokemon, id }, index) => (
            <li key={index}>
              <img
                src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.toLowerCase()}.gif`}
                alt={pokemon}
              />
              <h3>{pokemon}</h3>
            </li>
          ))}
            <Button width={60} onClick={() => setisModalHome(false)} >Confirmar</Button>
        </StyledModalHome>
      </Modal>
    </>
  );
};

export default ModalHome;
