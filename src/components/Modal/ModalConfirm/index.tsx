import { useContext } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import { UserContext } from "../../../Context/UserContext";
import Button from "../../Button";
import Modal from "../ModalBase";
import { StyledModalConfirm } from "../ModalHome/styled";

interface iModalConfirm {
  boosterTitle: string;
  boosterPrice: number;
}

const ModalConfirm = ({ boosterTitle, boosterPrice }: iModalConfirm) => {
  const { setIsModalConfirm, setisModalHome } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);

  const submitBuy = () => {
    setUser({ ...user, gold: user.gold - boosterPrice });
    setisModalHome(true);
    setIsModalConfirm(false);
  };

  return (
    <Modal setIs={setIsModalConfirm}>
      <StyledModalConfirm>
        {user.gold >= boosterPrice ? (
          <>
            <p>
              Deseja comprar {boosterTitle} por <span> {boosterPrice}g </span> ?
            </p>

            <Button width={55} onClick={() => submitBuy()}>Comprar</Button>
          </>
        ) : (
          <>
            <p>Saldo Insuficiente para comprar {boosterTitle} </p>
            <button onClick={() => setUser({ ...user, gold: user.gold + 1000 })}>
              pobre
            </button>
          </>
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