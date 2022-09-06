import AnimationPages from "../../components/AnimationPages";
import Header from "../../components/Header";
import StyledDivsMarket, {
  StyledDivSearchCard,
  StyledDivPokemonsMarket,
} from "./styles";
import StyledFullCart, {
  StyledDivOverflow,
} from "../../components/Cart/FullCart/styles";
import { StyledDivTotal } from "../../components/Cart/Emptycart/styles";
import Button from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import StyledSearchFilter from "../../components/SearchFilter/styles";
import ModalSearch from "../../components/Modal/ModalSearch";
import { ModalContext } from "../../Context/ModalContext";
import StyledMiniCard from "../../components/Cart/MiniPokemonCard/styles";
import { BsTrash } from "react-icons/bs";
import apiMarket from "../../services/apiMarket";
import { toast } from "react-toastify";
import StyledSinglePokemon, {
  StyledButtonBag,
} from "../../components/PokemonBag/styles";
import { StyledParagraph } from "../../components/TypePokemonParagraph/styles";
import { StyledSpan } from "../../components/TypePokemonSpan/styles";
import ModalConfirmMarket from "../../components/Modal/ModalConfirmMarket";

export interface IMarket {
  Pokemon: string;
  Rarity: string;
  Number: number;
  Type01: string;
  Type02: string;
  id: string | number;
  userId: string | number;
  price: number;
}

const Marketplace = () => {
  const [market, setMarket] = useState<IMarket[]>([]);
  const [currentCart, setCurrentCart] = useState<IMarket[]>([]);
  const [total, setTotal] = useState(0);

  const { isModalSearch, setIsModalSearch } = useContext(ModalContext);
  const { isModalConfirmMarket, setIsModalConfirmMarket } =
    useContext(ModalContext);

  const singleRemove = (id: string | number) => {
    const removeCartItens = currentCart.filter((e) => e.id !== id);

    setCurrentCart(removeCartItens);
    setTotal(total - 100);
  };

  useEffect(() => {
    const markList = async () => {
      const marketList = await apiMarket();
      const marketData = marketList?.data;

      setMarket(marketData);
    };

    markList();
  }, []);

  const pokeBuy = (id: string | number, price: number) => {
    if (currentCart.find((e) => e.id === id)) {
      console.log("igual");
    } else {
      const addToCart = market.filter((e) => e.id === id);

      setCurrentCart((oldCart) => [...oldCart, ...addToCart]);
      setTotal(total + price);
    }
  };

  return (
    <>
      <AnimationPages>
        <Header />
        <StyledDivsMarket>
          {isModalConfirmMarket && (
            <ModalConfirmMarket
              currentCart={currentCart}
              setCurrentCart={setCurrentCart}
              setTotal={setTotal}
            />
          )}
          <StyledDivPokemonsMarket>
            {market.map(({ id, Pokemon, Rarity, Type01, Type02, price }) => (
              <StyledSinglePokemon key={id}>
                <img
                  src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${Pokemon.toLowerCase()}.gif`}
                  alt={Pokemon}
                />
                <h3>{Pokemon}</h3>
                <>
                  <StyledParagraph
                    backgroundColor={`var(--color-type-${Type01.toLowerCase()})`}
                  >
                    {Type01}
                  </StyledParagraph>
                  {Type02 !== "null" ? (
                    <StyledSpan
                      backgroundColor={`var(--color-type-${Type02.toLowerCase()})`}
                    >
                      {Type02}
                    </StyledSpan>
                  ) : (
                    <></>
                  )}
                </>
                <h4>{Rarity}</h4>
                <div>
                  <span>Preço:</span>
                  <p>{price}g</p>
                </div>
                <Button width={80} onClick={() => pokeBuy(id, price)}>
                  Adicionar ao carrinho
                </Button>
              </StyledSinglePokemon>
            ))}
          </StyledDivPokemonsMarket>

          <StyledDivSearchCard>
            <StyledSearchFilter onClick={() => setIsModalSearch(true)}>
              {isModalSearch && <ModalSearch />}
              Filtro de Pesquisa
            </StyledSearchFilter>

            <StyledFullCart>
              <h2>Carrinho</h2>
              {currentCart.length > 0 ? (
                <StyledDivOverflow>
                  {currentCart.map(({ id, Pokemon, price }) => (
                    <StyledMiniCard key={id}>
                      <img
                        src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${Pokemon.toLowerCase()}.gif`}
                        alt={Pokemon}
                      />
                      <div>
                        <p>{Pokemon}</p>
                        <p>Preço</p>
                        <p>{price}</p>
                      </div>
                      <button>
                        <BsTrash onClick={() => singleRemove(id)} />
                      </button>
                    </StyledMiniCard>
                  ))}
                </StyledDivOverflow>
              ) : (
                <p>Carrinho vazio</p>
              )}

              <StyledDivTotal>
                <h4>Valor</h4>
                <h4>{total}g</h4>
                <Button
                  width={80}
                  onClick={() => setIsModalConfirmMarket(true)}
                >
                  Comprar
                </Button>
              </StyledDivTotal>
            </StyledFullCart>
          </StyledDivSearchCard>
        </StyledDivsMarket>
      </AnimationPages>
    </>
  );
};

export default Marketplace;
