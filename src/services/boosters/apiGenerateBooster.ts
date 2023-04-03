import { iPokemon } from "../../interfaces/pokemons";
import api from "../api";

const apiGenerateBooster = async (boosterId: string): Promise<iPokemon[]> => {
  const boostersList = await api.get(`/boosters/${boosterId}`);

  return boostersList.data;
};

export default apiGenerateBooster;
