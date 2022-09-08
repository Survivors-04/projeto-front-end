import api from "./api";

export interface IApiLogin {
  email?: string;
  password?: string;
}

const ApiLogin = (data: IApiLogin) => {
  const response = api.post("/login", data);
  return response;
};

export default ApiLogin;
