import { Dispatch, SetStateAction, useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { IMarket } from "../../../pages/Marketplace";
import apiAddPokemon from "../../../services/apiAddPokemon";
import apiMarketDelete from "../../../services/apiMarketDelete";
import Button from "../../Button";
import { toastSuccess } from "../../ToastifyConfig";
import Modal from "../ModalBase";
import { StyledModalConfirm } from "../ModalHome/styled";

interface iModalConfirmRemove {
  pokemonId: string | number;
  userId: string | number;
  pokemon: IMarket;
  setMarket: Dispatch<SetStateAction<IMarket[]>>;
  market: IMarket[];
}

const ModalConfirmRemove = ({
  pokemonId,
  userId,
  pokemon,
  setMarket,
  market,
}: iModalConfirmRemove) => {
  const { setIsModalConfirmRemove } = useContext(ModalContext);

  const removePokemon = async () => {
    await apiMarketDelete(pokemonId);

    await apiAddPokemon(userId, pokemon);

    const removeCartItens = market.filter((e) => e.id !== pokemonId);

    setMarket(removeCartItens);

    setIsModalConfirmRemove(false);

    toastSuccess("Pokemon removido do mercado");
  };

  return (
    <Modal setIs={setIsModalConfirmRemove}>
      <StyledModalConfirm>
        <h3>Deseja remover o(a) {pokemon.name} do mercado? </h3>
        <Button width={50} onClick={() => removePokemon()}>
          Confirmar
        </Button>
        <Button
          width={40}
          backgroundColor="var(--color-gray-1)"
          hover="var(--color-gray-0)"
          onClick={() => setIsModalConfirmRemove(false)}
        >
          Fechar
        </Button>
      </StyledModalConfirm>
    </Modal>
  );
};

export default ModalConfirmRemove;
