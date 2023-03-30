import { ReactNode } from "react";
import { loginSchema } from "../../validations/loginValidations";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForm {
  children: ReactNode;
  userSubmit: SubmitHandler<FieldValues>;
}
export interface IOnSubmitFunctionProps {
  username?: string;
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
      <label htmlFor="username">Username</label>
      <input
        type="username"
        placeholder="Digite Seu username"
        {...register("username")}
      />
      <span>{errors.username?.message}</span>

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
