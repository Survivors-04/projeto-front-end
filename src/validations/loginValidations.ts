import * as yup from "yup";
export  const formSchema = yup.object().shape({
  email: yup.string().required("Email Obrigatório!").email(),
  password: yup.string().required("Senha Obrigatória!"),
});
