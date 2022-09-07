import { Dispatch, SetStateAction, useContext } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import { UserContext } from "../../../Context/UserContext";
import { IMarket } from "../../../pages/Marketplace";
import { v4 as uuidv4 } from "uuid";
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
  setMarket: Dispatch<SetStateAction<IMarket[]>>;
  market: IMarket[];
}

const ModalConfirmMarket = ({
  currentCart,
  setCurrentCart,
  setTotal,
  setMarket,
  market,
}: iModalConfirmMarket) => {
  const { setIsModalConfirmMarket } = useContext(ModalContext);
  const { user, setUser, isLogged } = useContext(UserContext);

  const totalValue = currentCart.reduce((oldPrice, currentPrice) => {
    return currentPrice.price + oldPrice;
  }, 0);

  const submitBuy = async () => {
    await apiPatchUser(user.id, { gold: user.gold - totalValue });
    setUser({ ...user, gold: user.gold - totalValue });

    currentCart.forEach(async (pokemon) => {
      apiMarketDelete(pokemon.id);
      const newPokemons = market.filter((poke) => {
        return poke.id !== pokemon.id;
      });
      setMarket(newPokemons);

      const seller: iData = await apiGetUserID(pokemon.userId);

      const totalGold: iData = { gold: seller.gold + pokemon.price };

      await apiPatchUser(pokemon.userId, totalGold);

      const pokemonId = uuidv4();

      const newPokemon = { ...pokemon, userId: user.id, id: pokemonId };

      await apiAddPokemon(user.id, newPokemon);
    });

    setCurrentCart([]);
    setTotal(0);
    setIsModalConfirmMarket(false);
  };

  return (
    <Modal setIs={setIsModalConfirmMarket}>
      <StyledModalConfirm>
        {!isLogged ? (
          <h3> Você precisa estar conectado para fazer a compra </h3>
        ) : user.gold >= totalValue ? (
          <>
            <h3>
              Deseja comprar os Pokemons por <span> {totalValue}g </span> ?
            </h3>
            <Button width={55} onClick={submitBuy}>
              Comprar
            </Button>
          </>
        ) : (
          <h3>Saldo Insuficiente para comprar os Pokemons </h3>
        )}
        {}
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
