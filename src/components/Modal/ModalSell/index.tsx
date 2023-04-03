import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { iPokemonUser, iPokemonUserUpdate } from "../../../interfaces/pokemons";
import apiDeletePokedex from "../../../services/apiDeletePokedex";
import apiMarketPost from "../../../services/apiPostMarktet";
import Button from "../../Button";
import { toastSuccess } from "../../ToastifyConfig";
import Modal from "../ModalBase";
import { StyledContainerButton, StyledModaSell } from "./style";
import apiUpdatePokemonUser from "../../../services/pokemons/apiUpdatePokemonUser";

interface IModalSell {
  pokemonSell: iPokemonUser;
  setRefreshkey: Dispatch<SetStateAction<number>>;
}

const ModalSell = ({ pokemonSell, setRefreshkey }: IModalSell) => {
  const { setIsModalSell } = useContext(ModalContext);
  const [valueSell, setValueSell] = useState("");

  const data: iPokemonUserUpdate = {
    price: Number(valueSell),
    on_marketplace: true,
  };

  return (
    <Modal setIs={setIsModalSell}>
      <StyledModaSell>
        <p>Digite o valor que deseja vender seu pokemon</p>

        <input
          type="number"
          placeholder="ex: 100"
          min={1}
          onChange={(e) => setValueSell(e.target.value)}
          required
        />

        <StyledContainerButton>
          <Button
            width={60}
            onClick={() => {
              apiUpdatePokemonUser(data, pokemonSell.id);
              setRefreshkey((oldKey) => oldKey + 1);

              setIsModalSell(false);

              toastSuccess("Pokemon adicionado ao mercado");
            }}
          >
            Vender
          </Button>
          <Button
            width={40}
            backgroundColor="var(--color-gray-1)"
            hover="var(--color-gray-0)"
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
