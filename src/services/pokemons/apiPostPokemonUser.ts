import { iPokemon, iPokemonUser } from "../../interfaces/pokemons";
import Api from "../api";

const apiPostPokemonUser = async (
  data: iPokemon | iPokemon[],
  userId: string
): Promise<iPokemonUser> => {
  const res = await Api.post(`pokemons/users/${userId}/`, data);

  return res.data;
};

export default apiPostPokemonUser;
