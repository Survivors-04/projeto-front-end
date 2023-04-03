import { iBooster } from "../../interfaces/booster";
import api from "../api";

const apiBoostersList = async (): Promise<iBooster[]> => {
  const boostersList = await api.get("/boosters");

  return boostersList.data;
};

export default apiBoostersList;
