import * as yup from "yup";
export const loginSchema = yup.object().shape({
  username: yup.string().required("Nickname Obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});
