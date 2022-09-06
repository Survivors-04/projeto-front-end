import { iPokemon } from "../components/Modal/ModalHome";
import api from "./api";

const apiAddPokemon = async (userId: string | number, data: iPokemon) => {
  try {
    const response = await api.post(`/Users/${userId}/pokedexUser`, data);

    return response.data
  } catch (err) {
    console.log(err);
  }
};

export default apiAddPokemon;
