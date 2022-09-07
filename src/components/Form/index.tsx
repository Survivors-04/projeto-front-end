import { ReactNode } from "react";

import { loginSchema } from "../../validations/loginValidations";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForm {
  children: ReactNode;
  userSubmit: SubmitHandler<FieldValues>;
}
export interface IOnSubmitFunctionProps {
  email?: string;
  password?: string;
}

export const Form = ({ children, userSubmit }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmitFunctionProps>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(userSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Digite Seu Email"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        placeholder="Digite Sua Senha"
        {...register("password")}
      />
      <span>{errors.password?.message}</span>
      {children}
    </form>
  );
};
