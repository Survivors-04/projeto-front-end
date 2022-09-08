import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { UserContext } from "../../../context/UserContext";
import apiPatchUser from "../../../services/apiPatchUser";
import Button from "../../Button";
import Modal from "../ModalBase";
import { StyledModalConfirm } from "../ModalHome/styled";

interface iModalConfirm {
  boosterTitle: string;
  boosterPrice: number;
}

const ModalConfirm = ({ boosterTitle, boosterPrice }: iModalConfirm) => {
  const { setIsModalConfirm, setisModalHome } = useContext(ModalContext);
  const { user, setUser, isLogged } = useContext(UserContext);

  const submitBuy = async () => {
    await apiPatchUser(user.id, { gold: user.gold - boosterPrice });
    setUser({ ...user, gold: user.gold - boosterPrice });
    setisModalHome(true);
    setIsModalConfirm(false);
  };

  return (
    <Modal setIs={setIsModalConfirm}>
      <StyledModalConfirm>
        {!isLogged ? (
          <h3> Você precisa estar conectado para fazer a compra </h3>
        ) : user.gold >= boosterPrice ? (
          <>
            <h3>
              Deseja comprar {boosterTitle} por <span> {boosterPrice}g </span> ?
            </h3>

            <Button width={55} onClick={() => submitBuy()}>
              Comprar
            </Button>
          </>
        ) : (
          <h3>Saldo Insuficiente para comprar {boosterTitle} </h3>
        )}
        <Button
          width={40}
          backgroundColor="var(--color-gray-1)"
          hover="var(--color-gray-0)"
          onClick={() => setIsModalConfirm(false)}
        >
          Fechar
        </Button>
      </StyledModalConfirm>
    </Modal>
  );
};

export default ModalConfirm;
