import api from "./api";

const apiMarket = async () => {
  try {
    const marketList = await api.get("/api/marketplace/");

    return marketList;
  } catch (err) {
    console.log(err);
  }
};

export default apiMarket;
