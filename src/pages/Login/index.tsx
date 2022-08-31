
import StyledContainer from "../../components/Container/styles";
import { ContainerLogin } from "./styles";
import { Form } from "../../components/Form";

 const Login = () => {
  return (
    <StyledContainer>

    <ContainerLogin>
       
      <main className="main">
       <h2 className="title">Login</h2>
      
       <Form>
       <button type="submit">Entrar</button>
       </Form>

        <div className="register">
          <p>Ainda não possui uma conta?</p>
          <img src={"https://www.pkparaiso.com/imagenes/xy/sprites/animados/charmander.gif"} alt="charmander" />
          <button>Cadastrar</button>
        </div>
      </main>
    </ContainerLogin>
    </StyledContainer>
  );
};

export default Login;
