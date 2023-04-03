import { iPokemonUser } from "../../interfaces/pokemons";
import Api from "../api";

const apiReadPokemonUser = async (userId: string): Promise<iPokemonUser[]> => {
  const res = await Api.get(`pokemons/users/${userId}/`);

  return res.data;
};

export default apiReadPokemonUser;
