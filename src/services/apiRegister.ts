import Api from "./api";

export interface IApiRegister {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gold?: number;
}
const apiRegister = async (data: IApiRegister) => {
  await Api.post("/users", data);
};

export default apiRegister;
