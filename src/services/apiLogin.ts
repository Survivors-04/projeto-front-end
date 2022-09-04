import { useNavigate } from "react-router-dom";
import api from "./api";

export interface IApiLogin {
  email?: string;
  password?: string;
}

const ApiLogin = async (data: IApiLogin) => {
  const navigate = useNavigate();
  try {
    const response = await api.post("/login", data);

    window.localStorage.clear();
    window.localStorage.setItem("@TOKEN", response.data.accessToken);
    window.localStorage.setItem("@USERID", response.data.user.id);

    
  } catch (err) {
    console.log(err);
  }finally{
    navigate( "/", {replace:true} )
  }
};

export default ApiLogin;
