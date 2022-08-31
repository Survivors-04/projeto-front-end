
import { ContainerLogin } from "./Login";
import Charmander from "../../assets/imgs/Login/Charmander.svg";
import StyledContainer from "../../components/Container/styles";

import { Form } from "../../components/Form";






export const Login = () => {
 
  return (
    <StyledContainer>

    <ContainerLogin>
       
      <main >
       <h2 className="title">Login</h2>
       <Form>
       <button type="submit">Entrar</button>
       </Form>   
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
