import { iPokemonUser, iPokemonUserUpdate } from "../../interfaces/pokemons";
import Api from "../api";

const apiUpdatePokemonUser = async (
  data: iPokemonUserUpdate,
  pokemonId: string
): Promise<iPokemonUser> => {
  const res = await Api.patch(`pokemons/${pokemonId}/users/`, data);

  return res.data;
};

export default apiUpdatePokemonUser;
