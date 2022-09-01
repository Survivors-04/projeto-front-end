import StyledContainer from "../../components/Container/styles";
import { ContainerUsers } from "./styles";
import { Form, IOnSubmitFunctionProps } from "../../components/Form";
import { StyledRegister } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";

const Login = () => {
  const navigate = useNavigate();
 

  const onSubmitFunction = (data: IOnSubmitFunctionProps) => {
   console.log(data)
  };
  return (
    <StyledContainer>
      <ContainerUsers>
        <main >
          <h2>Login</h2>

          <Form userSubmit={onSubmitFunction}>
            <Button  width={80}>Entrar</Button>
          </Form>

          <StyledRegister>
            <p>Ainda não possui uma conta?</p>
            <img
              src={
                "https://www.pkparaiso.com/imagenes/xy/sprites/animados/charmander.gif"
              }
              alt="charmander"
            />
            <Button  width={100} onClick={() => navigate("/register")}>
              Cadastrar
            </Button>
          </StyledRegister>
        </main>
      </ContainerUsers>
    </StyledContainer>
  );
};

export default Login;
