import AnimationPages from "../../components/AnimationPages";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/Header";
import StyledDivsMarket, {
  StyledDivSearchCard,
  StyledDivPokemonsMarket,
  StyledDivTotal,
  StyledFullCart,
  StyledDivOverflow,
  StyledDivTipo,
  StyledSinglePokemon,
  StyledMiniCard,
  StyledSearchFilter,
  StyledCartPrice,
} from "./styles";

import Button from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import apiMarket from "../../services/apiMarket";
import { StyledParagraph } from "../../components/TypePokemonParagraph/styles";
import { StyledSpan } from "../../components/TypePokemonSpan/styles";
import ModalConfirmMarket from "../../components/Modal/ModalConfirmMarket";
import { ModalContext } from "../../Context/ModalContext";
import { toast } from "react-toastify";

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
  const [search, setSearch]= useState("");
  const [marketFilter, SetMarketFilter] = useState<IMarket[]>([]);  

  const { isModalConfirmMarket, setIsModalConfirmMarket } =
    useContext(ModalContext);

  const singleRemove = (id: string | number, price: number) => {
    const removeCartItens = currentCart.filter((e) => e.id !== id);
    setCurrentCart(removeCartItens);
    setTotal(total - price);
  };

  useEffect(() => {
    const filteredInput = (str: string) => {
      let search = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const filter = market.filter((poke) => {
        let name = poke.Pokemon.normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let rarity = poke.Rarity.normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        let type01 = poke.Type01.normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        let type02 = poke.Type02.normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        if (
          name.includes(search) ||
          rarity.includes(search) ||
          type01.includes(search) ||
          type02.includes(search)
        ) {
          return poke;
        }
      });

      SetMarketFilter(filter);
    };

    filteredInput(search);
  }, [search, market]);

 

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
      toast.error("Pokemon já está no carrinho");
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
              setMarket={setMarket}
              market={market}
            />
          )}
          <StyledDivPokemonsMarket>
            {search.trim().length === 0
              ? market.map(({ id, Pokemon, Rarity, Type01, Type02, price }) => (
                  <StyledSinglePokemon key={id}>
                    <img
                      src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                        Pokemon === "Nidoran-M"
                          ? "nidorino"
                          : Pokemon === "Nidoran-F"
                          ? "nidorina"
                          : Pokemon.toLowerCase()
                      }.gif`}
                      alt={Pokemon}
                    />
                    <h3>{Pokemon}</h3>
                    <>
                      <StyledDivTipo>
                        <StyledParagraph
                          backgroundColor={`var(--color-type-${Type01.toLowerCase()})`}
                        >
                          {Type01.charAt(0).toUpperCase() + Type01.slice(1)}
                        </StyledParagraph>
                        {Type02 !== "null" ? (
                          <StyledSpan
                            backgroundColor={`var(--color-type-${Type02.toLowerCase()})`}
                          >
                            {Type02.charAt(0).toUpperCase() + Type02.slice(1)}
                          </StyledSpan>
                        ) : (
                          <></>
                        )}
                      </StyledDivTipo>
                    </>
                    <h4>{Rarity}</h4>
                    <div>
                      <p>
                        Preço: <span> {price}g</span>
                      </p>
                    </div>
                    <Button
                      width={80}
                      hover={"var(--color-red-focus)"}
                      onClick={() => pokeBuy(id, price)}
                    >
                      Adicionar
                    </Button>
                  </StyledSinglePokemon>
                ))
              : marketFilter.map(
                  ({ id, Pokemon, Rarity, Type01, Type02, price }) => (
                    <StyledSinglePokemon key={id}>
                      <img
                        src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${Pokemon.toLowerCase()}.gif`}
                        alt={Pokemon}
                      />
                      <h3>{Pokemon}</h3>
                      <>
                        <StyledDivTipo>
                          <StyledParagraph
                            backgroundColor={`var(--color-type-${Type01.toLowerCase()})`}
                          >
                            {Type01.charAt(0).toUpperCase() + Type01.slice(1)}
                          </StyledParagraph>
                          {Type02 !== "null" ? (
                            <StyledSpan
                              backgroundColor={`var(--color-type-${Type02.toLowerCase()})`}
                            >
                              {Type02.charAt(0).toUpperCase() + Type02.slice(1)}
                            </StyledSpan>
                          ) : (
                            <></>
                          )}
                        </StyledDivTipo>
                      </>
                      <h4>{Rarity}</h4>
                      <div>
                        <p>
                          Preço: <span> {price}g</span>
                        </p>
                      </div>
                      <Button
                        width={80}
                        hover={"var(--color-red-focus)"}
                        onClick={() => pokeBuy(id, price)}
                      >
                        Adicionar
                      </Button>
                    </StyledSinglePokemon>
                  )
                )}
          </StyledDivPokemonsMarket>

          <StyledDivSearchCard>
            <StyledSearchFilter>
              <input
                type="text"
                placeholder="Pesquisar Pokemon..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
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
                      <h3>{Pokemon}</h3>
                      <div>
                        <p>Preço</p>
                        <StyledCartPrice>{price}g</StyledCartPrice>
                      </div>
                      <button>
                        <BsTrash onClick={() => singleRemove(id, price)} />
                      </button>
                    </StyledMiniCard>
                  ))}
                </StyledDivOverflow>
              ) : (
                <p>Carrinho Vazio</p>
              )}
              {currentCart.length > 0 ? (
                <StyledDivTotal>
                  <h4>Valor</h4>
                  <h4>{total}g</h4>
                  <Button
                    width={80}
                    hover={"var(--color-yellow-focus)"}
                    onClick={() => setIsModalConfirmMarket(true)}
                  >
                    Comprar
                  </Button>
                </StyledDivTotal>
              ) : (
                <></>
              )}
            </StyledFullCart>
          </StyledDivSearchCard>
        </StyledDivsMarket>
      </AnimationPages>
    </>
  );
};

export default Marketplace;
