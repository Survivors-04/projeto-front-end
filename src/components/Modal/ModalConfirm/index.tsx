import { useContext } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import Button from "../../Button";
import Modal from "../ModalBase";
import { ModalHome } from "../ModalHome";
import { StyledModalHome } from "../ModalHome/styled";

interface iModalConfirm {
  boosterTitle: string;
  boosterPrice: number;
}

const ModalConfirm = ({ boosterTitle, boosterPrice }: iModalConfirm) => {
  const { setIsModalConfirm, isModalHome, setisModalHome } =
    useContext(ModalContext);

  const submitBuy = () => {
    if (boosterPrice === 100) {
    }
  };

  return (
    <>
      <Modal setIs={setIsModalConfirm}>
        <StyledModalHome>
          <p> {boosterTitle} </p>
          <span> {boosterPrice} </span>
          <Button
            onClick={() => {
              setisModalHome(true);
              setIsModalConfirm(false)
            }}
          >
            Confirmar
          </Button>
          <Button
            backgroundColor="var(--color-gray-1)"
            hover=""
            onClick={() => setIsModalConfirm(false)}
          >
            Fechar
          </Button>
        </StyledModalHome>
      </Modal>
    </>
  );
};

export default ModalConfirm;
