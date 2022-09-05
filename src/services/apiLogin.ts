import { useNavigate } from "react-router-dom";
import api from "./api";

export interface IApiLogin {
  email?: string;
  password?: string;
}

const ApiLogin = (data: IApiLogin) => {
  

  api
    .post("/login", data)
    .then((res) => {
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", res.data.accessToken);
      window.localStorage.setItem("@USERID", res.data.user.id);
    })
    .catch((err) => {
      console.log(err);
    });

  const token = window.localStorage.getItem("@TOKEN");
  console.log(token)
};

export default ApiLogin;
