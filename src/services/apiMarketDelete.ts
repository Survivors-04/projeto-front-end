import api from "./api";

const apiMarketDelete = async (pokemonID: string | number) => {
  try {
    await api.delete(`/marketPlace/${pokemonID}`);
  } catch (err) {
    console.log(err);
  }
};

export default apiMarketDelete;
