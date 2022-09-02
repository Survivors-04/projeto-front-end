import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import api from "./api";

interface IPokemons {
  Pokemon: string;
  Rarity: string;
  Number: number;
  Type01: string;
  Type02: string;
  userId: number;
  id: number;
}

const ApiPokedex = async () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const { user } = useContext(UserContext);

  try {
    const response = await api
      .get(`/Users/${user.id}/pokedexUser`)
      .then((response) => {
        setPokemons(response.data);
      });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default ApiPokedex;
