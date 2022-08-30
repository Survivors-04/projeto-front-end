import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ContainerLogin } from "./Login";
import Charmander from "../../assets/imgs/Login/Charmander.svg";
import StyledContainer from "../../components/Container/styles";

interface IOnSubmitFunctionProps {
  email: string;
  password: string;
}

export const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório!").email(),
    password: yup.string().required("Senha Obrigatória!"),
  });

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
    <StyledContainer>


   
    <ContainerLogin>
       
      <main className="main">
       <h2 className="title">Login</h2>
      
        <form className="formLogin" onSubmit={handleSubmit(onSubmitFunction)}>
          
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

            <button type="submit">Entrar</button>
            
        </form>

        <div className="register">
          <p>Ainda não possui uma conta?</p>
          <img src={Charmander} alt="charmander" />
          <button>Cadastrar</button>
        </div>
      </main>
    </ContainerLogin>
    </StyledContainer>
  );
};
