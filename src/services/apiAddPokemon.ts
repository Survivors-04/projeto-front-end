//import { iPokemon } from "../components/Modal/ModalHome";
import { IMarket } from "../pages/Marketplace";
import api from "./api";

const apiAddPokemon = async (userId: string | number, data: IMarket) => {
  try {
    const response = await api.post(`/Users/${userId}/pokedexUser`, data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default apiAddPokemon;
