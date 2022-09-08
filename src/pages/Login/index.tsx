import StyledContainer from "../../components/Container/styles";
import { ContainerUsers } from "../../components/StylerUser/styles";
import { Form, IOnSubmitFunctionProps } from "../../components/Form";
import { StyledRegister } from "../../components/StylerUser/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";
import ImgBulbasaur from "../../assets/imgs/Login/Bulbasaur.png";
import { HeaderUsers } from "../../components/StylerUser/styles";
import ApiLogin from "../../services/apiLogin";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import AnimationPages from "../../components/AnimationPages";
import api from "../../services/api";
import { toastError } from "../../components/ToastifyConfig";

interface iLocationState {
  from: {
    pathname: string;
  };
}
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setIsLogged } = useContext(UserContext);

  const onSubmitFunction = (data: IOnSubmitFunctionProps) => {
    const fromPathname = () => {
      if (location.state) {
        const { from } = location.state as iLocationState;

        return from.pathname;
      } else {
        return "/profile";
      }
    };
    const toNavigate = fromPathname();

    ApiLogin(data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.accessToken);
        window.localStorage.setItem("@USERID", res.data.user.id);
        setUser(res.data.user);

        const token = localStorage.getItem("@TOKEN");

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        setIsLogged(true);
        navigate(toNavigate, { replace: true });
      })
      .catch((err) => {
        console.log(err);

        toastError("Email ou senha incorreto(s)");
      });
  };
  return (
    <AnimationPages>
      <StyledContainer>
        <HeaderUsers>
          <img src={logoHeader} alt="Grupo4" />
          <Button width={25} onClick={() => navigate("/")}>
            Voltar
          </Button>
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
    </AnimationPages>
  );
};

export default Login;
