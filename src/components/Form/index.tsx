
import { ReactNode } from "react";
import { formSchema } from "../../validations/loginValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


interface IForm{
children:ReactNode,
}

interface IOnSubmitFunctionProps {
    email: string;
    password: string;
  }

export const Form = ({children}:IForm)=>{

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IOnSubmitFunctionProps>({
        resolver: yupResolver(formSchema)
      });
      const onSubmitFunction = ( data:IOnSubmitFunctionProps ) => {
        console.log(data)
      }

    return (
        <form  onSubmit={handleSubmit(onSubmitFunction)}>
           <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Digite Seu Email"
              {...register("email")}
            />
            {errors.email?.message}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite Sua Senha"
              {...register("password")}
            />
            {errors.password?.message}
            {children}
            
           
            
        </form>
    )
}