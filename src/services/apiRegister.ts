import Api from "./api";

export interface IApiRegister {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gold?: number;
}
const apiRegister = async (data: IApiRegister) => {
  await Api.post("/users", data).then((response) => console.log(response));
};

export default apiRegister;
