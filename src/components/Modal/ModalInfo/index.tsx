import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import Button from "../../Button";
import Modal from "../ModalBase";
import StyledInfo from "./style";

const ModalInfo = () => {
  const { setIsModalInfo } = useContext(ModalContext);

  return (
    <Modal setIs={setIsModalInfo}>
      <StyledInfo>
        <table>
          <thead>
            <tr>
              <th>Raridade</th>
              <th>Pacote 01</th>
              <th>Pacote 02</th>
              <th>Pacote 03</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comum</td>
              <td>75%</td>
              <td>60%</td>
              <td>55%</td>
            </tr>
            <tr>
              <td>Raro</td>
              <td>25%</td>
              <td>35%</td>
              <td>39%</td>
            </tr>
            <tr>
              <td>Épico</td>
              <td>0%</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Lendário</td>
              <td>0%</td>
              <td>0%</td>
              <td>1%</td>
            </tr>
          </tbody>
        </table>
        <Button
          width={40}
          backgroundColor="var(--color-gray-1)"
          hover="var(--color-gray-0)"
          onClick={() => setIsModalInfo(false)}
        >
          Fechar
        </Button>
      </StyledInfo>
    </Modal>
  );
};

export default ModalInfo;
