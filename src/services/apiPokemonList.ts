import api from "./api";

const apiPokemonList = async () => {
  try {
    const pokemonList = await api.get("/pokemons");

    return pokemonList;
  } catch (err) {
    console.log(err);
  }
};

export default apiPokemonList;
