import { Dispatch, SetStateAction, useContext } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import { iUser, UserContext } from "../../../Context/UserContext";
import { IMarket } from "../../../pages/Marketplace";
import api from "../../../services/api";
import apiAddPokemon from "../../../services/apiAddPokemon";
import apiGetUserID from "../../../services/apiGetUserID";
import apiMarketDelete from "../../../services/apiMarketDelete";
import apiPatchUser, { iData } from "../../../services/apiPatchUser";
import Button from "../../Button";
import Modal from "../ModalBase";
import { StyledModalConfirm } from "../ModalHome/styled";

interface iModalConfirmMarket {
  currentCart: IMarket[];
  setCurrentCart: (value: SetStateAction<IMarket[]>) => void;
  setTotal: Dispatch<SetStateAction<number>>;
}

const ModalConfirmMarket = ({
  currentCart,
  setCurrentCart,
  setTotal,
}: iModalConfirmMarket) => {
  const { setIsModalConfirmMarket } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);

  const totalValue = currentCart.reduce((oldPrice, currentPrice) => {
    return currentPrice.price + oldPrice;
  }, 0);

  const submitBuy = () => {
    setUser({ ...user, gold: user.gold - totalValue });

    currentCart.forEach(async (pokemon) => {
      console.log("Pokemon", (pokemon.userId = user.id));

      apiMarketDelete(pokemon.id);

      const seller: iData = await apiGetUserID(pokemon.userId);

      const totalGold: iData = { gold: seller.gold + pokemon.price };

      await apiPatchUser(pokemon.userId, totalGold);

      const newPokemon = ({...pokemon, userId: user.id});
      console.log(newPokemon)

      const teste = await apiAddPokemon(user.id, newPokemon);
      const aaa = await api.post(`/Users/${user.id}/pokedexUser`, newPokemon);

      console.log("UserID", user.id);
      console.log("Add 01", teste);
      console.log("Add 02", aaa);
    });

    setCurrentCart([]);
    setTotal(0);
    setIsModalConfirmMarket(false);
  };

  return (
    <Modal setIs={setIsModalConfirmMarket}>
      <StyledModalConfirm>
        {user.gold >= totalValue ? (
          <>
            <h3>
              Deseja comprar os Pokemons por <span> {totalValue}g </span> ?
            </h3>
            <Button width={55} onClick={submitBuy}>
              Comprar
            </Button>
          </>
        ) : (
          <>
            <h3>Saldo Insuficiente para comprar os Pokemons </h3>
            <button
              onClick={() => setUser({ ...user, gold: user.gold + 1000 })}
            >
              pobre
            </button>
          </>
        )}
        <Button
          width={40}
          backgroundColor="var(--color-gray-1)"
          hover="var(--color-gray-0)"
          onClick={() => setIsModalConfirmMarket(false)}
        >
          Fechar
        </Button>
      </StyledModalConfirm>
    </Modal>
  );
};

export default ModalConfirmMarket;
