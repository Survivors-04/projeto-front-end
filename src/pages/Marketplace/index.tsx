import AnimationPages from "../../components/AnimationPages";
import "react-toastify/dist/ReactToastify.css";
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
import { UserContext } from "../../Context/UserContext";
import apiDeletePokedex from "../../services/apiDeletePokedex";
import apiAddPokemon from "../../services/apiAddPokemon";
import apiMarketDelete from "../../services/apiMarketDelete";

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
  const [search, setSearch] = useState("");
  const [marketFilter, SetMarketFilter] = useState<IMarket[]>([]);

  const { isModalConfirmMarket, setIsModalConfirmMarket } =
    useContext(ModalContext);
  const { user } = useContext(UserContext);

  const singleRemove = (id: string | number, price: number) => {
    const removeCartItens = currentCart.filter((e) => e.id !== id);
    setCurrentCart(removeCartItens);
    setTotal(total - price);
  };

  const removePokemon = async (
    pokemonId: string | number,
    userId: string | number,
    pokemon: IMarket
  ) => {
    await apiMarketDelete(pokemonId);

    await apiAddPokemon(userId, pokemon);

    const removeCartItens = market.filter((e) => e.id !== pokemonId);

    setMarket(removeCartItens);
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
              ? market.map((pokemon) => (
                  <StyledSinglePokemon key={pokemon.id}>
                    <img
                      src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                        pokemon.Pokemon === "Nidoran-M"
                          ? "nidorino"
                          : pokemon.Pokemon === "Nidoran-F"
                          ? "nidorina"
                          : pokemon.Pokemon.toLowerCase()
                      }.gif`}
                      alt={pokemon.Pokemon}
                    />
                    <h3>{pokemon.Pokemon}</h3>
                    <>
                      <StyledDivTipo>
                        <StyledParagraph
                          backgroundColor={`var(--color-type-${pokemon.Type01.toLowerCase()})`}
                        >
                          {pokemon.Type01.charAt(0).toUpperCase() +
                            pokemon.Type01.slice(1)}
                        </StyledParagraph>
                        {pokemon.Type02 !== "null" ? (
                          <StyledSpan
                            backgroundColor={`var(--color-type-${pokemon.Type02.toLowerCase()})`}
                          >
                            {pokemon.Type02.charAt(0).toUpperCase() +
                              pokemon.Type02.slice(1)}
                          </StyledSpan>
                        ) : (
                          <></>
                        )}
                      </StyledDivTipo>
                    </>
                    <h4>{pokemon.Rarity}</h4>
                    <div>
                      <p>
                        Preço: <span> {pokemon.price}g</span>
                      </p>
                    </div>
                    {String(user.id) === pokemon.userId ? (
                      <Button
                        width={80}
                        hover={"var(--color-red-focus)"}
                        onClick={() =>
                          removePokemon(pokemon.id, pokemon.userId, pokemon)
                        }
                      >
                        Remover
                      </Button>
                    ) : (
                      <Button
                        width={80}
                        hover={"var(--color-red-focus)"}
                        onClick={() => pokeBuy(pokemon.id, pokemon.price)}
                      >
                        Adicionar
                      </Button>
                    )}
                  </StyledSinglePokemon>
                ))
              : marketFilter.map((pokemon) => (
                  <StyledSinglePokemon key={pokemon.id}>
                    <img
                      src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemon.Pokemon.toLowerCase()}.gif`}
                      alt={pokemon.Pokemon}
                    />
                    <h3>{pokemon.Pokemon}</h3>
                    <>
                      <StyledDivTipo>
                        <StyledParagraph
                          backgroundColor={`var(--color-type-${pokemon.Type01.toLowerCase()})`}
                        >
                          {pokemon.Type01.charAt(0).toUpperCase() +
                            pokemon.Type01.slice(1)}
                        </StyledParagraph>
                        {pokemon.Type02 !== "null" ? (
                          <StyledSpan
                            backgroundColor={`var(--color-type-${pokemon.Type02.toLowerCase()})`}
                          >
                            {pokemon.Type02.charAt(0).toUpperCase() +
                              pokemon.Type02.slice(1)}
                          </StyledSpan>
                        ) : (
                          <></>
                        )}
                      </StyledDivTipo>
                    </>
                    <h4>{pokemon.Rarity}</h4>
                    <div>
                      <p>
                        Preço: <span> {pokemon.price}g</span>
                      </p>
                    </div>
                    {String(user.id) === pokemon.userId ? (
                      <Button
                        width={80}
                        hover={"var(--color-red-focus)"}
                        onClick={() =>
                          removePokemon(pokemon.id, pokemon.userId, pokemon)
                        }
                      >
                        Remover
                      </Button>
                    ) : (
                      <Button
                        width={80}
                        hover={"var(--color-red-focus)"}
                        onClick={() => pokeBuy(pokemon.id, pokemon.price)}
                      >
                        Adicionar
                      </Button>
                    )}
                  </StyledSinglePokemon>
                ))}
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
