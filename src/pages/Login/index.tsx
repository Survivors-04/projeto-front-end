import StyledContainer from "../../components/Container/styles";
import { ContainerUsers } from "./styles";
import { Form, IOnSubmitFunctionProps } from "../../components/Form";
import { StyledRegister } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";
import ImgBulbasaur from "../../assets/imgs/Login/Bulbasaur.png";
import { HeaderUsers } from "../Register/styles";

const Login = () => {
  const navigate = useNavigate();

  const onSubmitFunction = (data: IOnSubmitFunctionProps) => {
    console.log(data);
   
  };
  return (
    <StyledContainer>
      <HeaderUsers>
        <img src={logoHeader} alt="Grupo4" />
        <Button width={25} onClick={() => navigate("/")}>Voltar</Button>
      </HeaderUsers>
      <ContainerUsers imgBackground={ImgBulbasaur}>
        <main>
          <h2>Login</h2>

          <Form userSubmit={onSubmitFunction}>
            <Button width={80}>Entrar</Button>
          </Form>

          <StyledRegister>
            <p>Ainda não possui uma conta?</p>
            <img
              src={
                "https://www.pkparaiso.com/imagenes/xy/sprites/animados/charmander.gif"
              }
              alt="charmander"
            />
            <Button width={100} onClick={() => navigate("/register")}>
              Cadastrar
            </Button>
          </StyledRegister>
        </main>
      </ContainerUsers>
    </StyledContainer>
  );
};

export default Login;
