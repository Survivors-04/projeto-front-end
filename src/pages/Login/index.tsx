
import StyledContainer from "../../components/Container/styles";
import { ContainerLogin } from "./styles";
import { Form } from "../../components/Form";
import { StyledRegister } from "./styles";

 const Login = () => {
  return (
    <StyledContainer>

    <ContainerLogin>
       
      <main className="main">
       <h2 className="title">Login</h2>
      
       <Form>
       <button type="submit">Entrar</button>
       </Form>

        <StyledRegister>
          <p>Ainda não possui uma conta?</p>
          <img src={"https://www.pkparaiso.com/imagenes/xy/sprites/animados/charmander.gif"} alt="charmander" />
          <button>Cadastrar</button>
        </StyledRegister>
      </main>
    </ContainerLogin>
    </StyledContainer>
  );
};

export default Login;
