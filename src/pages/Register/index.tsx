import Button from "../../components/Button";
import StyledContainer from "../../components/Container/styles";
import { useNavigate } from "react-router-dom";
import { ContainerUsers, StyledRegister } from "../Login/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validations/RegisterValidations";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";
import ImgSquirtle from  "../../assets/imgs/Register/squirtle.svg";
import { HeaderUsers } from "./styles";


interface IOnSubmitFunctionProps {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmitFunctionProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: IOnSubmitFunctionProps) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      
      <HeaderUsers>
         <img
              src={
               logoHeader
              }
              alt="Grupo4"
            />
           <Button width={25} onClick={() => navigate("/Login")}>Login</Button>
        </HeaderUsers>
      <ContainerUsers imgBackground={ImgSquirtle}>
      
        <main>
          <h2>Crie sua conta</h2>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
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

            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              placeholder="Digite sua senha novamente"
              {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>

            <label htmlFor="name">Nickname</label>
            <input
              type="text"
              placeholder="Digite Seu nickname"
              {...register("name")}
            />
            <span>{errors.name?.message}</span>
            <Button width={100} onClick={() => navigate("/register")}>
              Cadastrar
            </Button>
          </form>
        </main>
      </ContainerUsers>
    </StyledContainer>
  );
};

export default Register;
