import * as yup from "yup";
export  const formSchema = yup.object().shape({
  email: yup.string().required("Email Obrigatório!").email(),
  password: yup
  .string()
  .required("Senha obrigatória.")
  .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
  .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
  .matches(/(\d)/, "deve conter ao menos 1 número")
  .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
  .matches(/.{8}/, "deve conter ao menos 8 dígitos"),
  username:yup.string().required("Nickname obrigatório!")
});
