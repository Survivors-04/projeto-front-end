import * as yup from "yup";
export const formSchema = yup.object().shape({
  username: yup.string().required("Nickname obrigatório!"),
  first_name: yup.string().required("Nome obrigatório!"),
  last_name: yup.string().required("Sobrenome obrigatório!"),
  email: yup.string().required("Email Obrigatório!").email(),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/.{6}/, "deve conter ao menos 6 dígitos"),
  confirmPassword: yup
    .string()
    .required("Confirmação obrigatória!")
    .oneOf([yup.ref("password"), null], "Deve ser igual a senha!"),
});
