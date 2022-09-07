import api from "./api";

const apiDeletePokedex = async (pokemonID: string | number) => {
  try {
    await api.delete(`/pokedexUser/${pokemonID}`);
  } catch (err) {
    console.log(err);
  }
};

export default apiDeletePokedex;