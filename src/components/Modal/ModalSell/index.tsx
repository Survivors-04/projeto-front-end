import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import { IPokemons } from "../../../pages/Profile";
import apiDeletePokedex from "../../../services/apiDeletePokedex";
import apiMarketPost from "../../../services/apiPostMarktet";
import Button from "../../Button";
import Modal from "../ModalBase";
import {
  StyledButtonVender,
  StyledContainerButton,
  StyledModaSell,
} from "./style";

interface IModalSell {
  pokemonSell: IPokemons;
  pokemons: IPokemons[];
  setPokemons: Dispatch<SetStateAction<IPokemons[]>>;
}

const ModalSell = ({ pokemonSell, pokemons, setPokemons }: IModalSell) => {
  const { setIsModalSell } = useContext(ModalContext);
  const [valueSell, setValueSell] = useState("");
  const priceSell = (pokemonSell.price = Number(valueSell));

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
              apiMarketPost(pokemonSell);
              apiDeletePokedex(pokemonSell.id);

              const newPokemons = pokemons.filter((elem) => {
                return elem.id !== pokemonSell.id;
              });
              setPokemons(newPokemons);
              setIsModalSell(false);
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
