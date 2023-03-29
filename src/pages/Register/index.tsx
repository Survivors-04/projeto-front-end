import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ContainerUsers } from "../../components/StylerUser/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validations/RegisterValidations";
import logoHeader from "../../assets/imgs/HeaderSvg/logoHeader.svg";
import ImgSquirtle from "../../assets/imgs/Register/squirtle.svg";
import { HeaderUsers } from "../../components/StylerUser/styles";
import apiRegister from "../../services/apiRegister";
import AnimationPages from "../../components/AnimationPages";
import { toastSuccess, toastError } from "../../components/ToastifyConfig";
import { Container } from "./style";

interface IOnSubmitFunctionProps {
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
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
    delete data.confirmPassword;

    const dataUser = data;
    apiRegister(dataUser)
      .then(() => {
        toastSuccess("Conta criada com sucesso");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        toastError("Algo deu errado!");
      });
  };

  return (
    <AnimationPages>
      <Container>
        <HeaderUsers>
          <img src={logoHeader} alt="Grupo4" />
          <Button width={25} onClick={() => navigate("/Login")}>
            Login
          </Button>
        </HeaderUsers>
        <ContainerUsers imgBackground={ImgSquirtle}>
          <main>
            <h2>Crie sua conta</h2>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <label htmlFor="name">Nickname</label>
              <input
                type="text"
                placeholder="Digite Seu nickname"
                {...register("username")}
              />
              <span>{errors.username?.message}</span>

              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Digite Seu nickname"
                {...register("first_name")}
              />
              <span>{errors.first_name?.message}</span>

              <label htmlFor="name">Sobrenome</label>
              <input
                type="text"
                placeholder="Digite Seu nickname"
                {...register("last_name")}
              />
              <span>{errors.last_name?.message}</span>

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

              <label htmlFor="password">Confirmar senha</label>
              <input
                type="password"
                placeholder="Digite Sua Senha"
                {...register("confirmPassword")}
              />
              <span>{errors.confirmPassword?.message}</span>

              <Button width={100} onClick={() => navigate("/register")}>
                Cadastrar
              </Button>
            </form>
          </main>
        </ContainerUsers>
      </Container>
    </AnimationPages>
  );
};

export default Register;
