import { useContext, useState } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import { IPokemons } from "../../../pages/Profile";
import apiMarketPost from "../../../services/apiPostMarktet";
import Button from "../../Button";
import Modal from "../ModalBase";
import {
  StyledButtonVender,
  StyledContainerButton,
  StyledModaSell,
} from "./style";

interface IModalSell{
  pokemonSell:IPokemons
}


const ModalSell = ( {pokemonSell}:IModalSell) => {
  const { setIsModalSell } = useContext(ModalContext);
  const [valueSell, setValueSell] = useState("");
  const priceSell = pokemonSell.price = Number(valueSell)

  return (
    <Modal setIs={setIsModalSell}>
      <StyledModaSell>
        <p>Digite o valor Que deseja vender seu pokemon</p>
        <input
          type="number"
          placeholder="ex: 100"
          onChange={(e) => setValueSell(e.target.value)}
        />

        <StyledContainerButton>
          <StyledButtonVender width={70} onClick={() => {
           apiMarketPost(pokemonSell)
            
          }}>
            Vender
          </StyledButtonVender>
          <Button
            width={30}
            onClick={() => {
              setIsModalSell(false);
            }}
          >
            Cancelar
          </Button>
        </StyledContainerButton>
      </StyledModaSell>
    </Modal>
  );
};
export default ModalSell;
