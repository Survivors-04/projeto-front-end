import { IMarket } from "../pages/Marketplace";
import api from "./api";

const apiMarketPost = async (data:IMarket) => {
  try {
    const marketList = await api.post("/marketPlace",data);
    
    return marketList.status
  } catch (err) {
    console.log(err);
  }
};

export default apiMarketPost;