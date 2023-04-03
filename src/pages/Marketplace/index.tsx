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
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";
import ModalConfirmRemove from "../../components/Modal/ModalConfirmRemove";
import { toastError } from "../../components/ToastifyConfig";

export interface IMarket {
  id: string | number;
  name: string;
  on_marketplace: boolean;
  pokedex: number;
  price: number;
  rarity: string;
  type01: string;
  type02: string;
  user: string | number;
}

const Marketplace = () => {
  const [market, setMarket] = useState<IMarket[]>([]);
  const [currentCart, setCurrentCart] = useState<IMarket[]>([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [pokemonID, setPokemonID] = useState<string | number>("");
  const [userID, setUserID] = useState<string | number>("");
  const [pokemonObj, setPokemonObj] = useState({} as IMarket);

  const [marketFilter, SetMarketFilter] = useState<IMarket[]>([]);

  const { isModalConfirmMarket, setIsModalConfirmMarket } =
    useContext(ModalContext);
  const { isModalConfirmRemove, setIsModalConfirmRemove } =
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
    setPokemonID(pokemonId);
    setUserID(userId);
    setPokemonObj(pokemon);
    setIsModalConfirmRemove(true);
  };

  useEffect(() => {
    const filteredInput = (str: string) => {
      let search = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const filter = market.filter((poke) => {
        let name = poke.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let rarity = poke.rarity
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        let type01 = poke.type01
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        let type02 = poke.type02
          .normalize("NFD")
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
      await apiMarket()
        .then((res) => {
          setMarket(res?.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    markList();
  }, []);

  const pokeBuy = (id: string | number, price: number) => {
    if (currentCart.find((e) => e.id === id)) {
      toastError("Pokemon já está no carrinho");
    } else {
      const addToCart = market.filter((e) => e.id === id);
      setCurrentCart((oldCart) => [...oldCart, ...addToCart]);
      setTotal(total + price);
    }
  };

  console.log(market);
  return (
    <>
      <AnimationPages>
        <Header />
        <StyledDivsMarket>
          {isModalConfirmRemove && (
            <ModalConfirmRemove
              pokemonId={pokemonID}
              userId={userID}
              pokemon={pokemonObj}
              setMarket={setMarket}
              market={market}
            />
          )}
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
                        pokemon.name === "Nidoran-M"
                          ? "nidorino"
                          : pokemon.name === "Nidoran-F"
                          ? "nidorina"
                          : pokemon.name === "Mr.Mime"
                          ? "mr._mime"
                          : pokemon.name.toLowerCase()
                      }.gif`}
                      alt={pokemon.name}
                    />
                    <h3>{pokemon.name}</h3>
                    <>
                      <StyledDivTipo>
                        <StyledParagraph
                          backgroundColor={`var(--color-type-${pokemon.type01.toLowerCase()})`}
                        >
                          {pokemon.type01.charAt(0).toUpperCase() +
                            pokemon.type01.slice(1)}
                        </StyledParagraph>
                        {pokemon.type02 !== "null" ? (
                          <StyledSpan
                            backgroundColor={`var(--color-type-${pokemon.type02.toLowerCase()})`}
                          >
                            {pokemon.type02.charAt(0).toUpperCase() +
                              pokemon.type02.slice(1)}
                          </StyledSpan>
                        ) : (
                          <></>
                        )}
                      </StyledDivTipo>
                    </>
                    <h4>{pokemon.rarity}</h4>
                    <div>
                      <p>
                        Preço: <span> {pokemon.price}g</span>
                      </p>
                    </div>

                    {String(user.id) === pokemon.user ? (
                      <Button
                        width={80}
                        hover={"var(--color-red-focus)"}
                        onClick={() =>
                          removePokemon(pokemon.id, pokemon.user, pokemon)
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
                      src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                        pokemon.name === "Nidoran-M"
                          ? "nidorino"
                          : pokemon.name === "Nidoran-F"
                          ? "nidorina"
                          : pokemon.name === "Mr.Mime"
                          ? "mr._mime"
                          : pokemon.name.toLowerCase()
                      }.gif`}
                      alt={pokemon.name}
                    />
                    <h3>{pokemon.name}</h3>
                    <>
                      <StyledDivTipo>
                        <StyledParagraph
                          backgroundColor={`var(--color-type-${pokemon.type01.toLowerCase()})`}
                        >
                          {pokemon.type01.charAt(0).toUpperCase() +
                            pokemon.type01.slice(1)}
                        </StyledParagraph>
                        {pokemon.type02 !== "null" ? (
                          <StyledSpan
                            backgroundColor={`var(--color-type-${pokemon.type02.toLowerCase()})`}
                          >
                            {pokemon.type02.charAt(0).toUpperCase() +
                              pokemon.type02.slice(1)}
                          </StyledSpan>
                        ) : (
                          <></>
                        )}
                      </StyledDivTipo>
                    </>
                    <h4>{pokemon.rarity}</h4>
                    <div>
                      <p>
                        Preço: <span> {pokemon.price}g</span>
                      </p>
                    </div>
                    {String(user.id) === pokemon.user ? (
                      <Button
                        width={80}
                        hover={"var(--color-red-focus)"}
                        onClick={() =>
                          removePokemon(pokemon.id, pokemon.user, pokemon)
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
                  {currentCart.map(({ id, name, price }) => (
                    <StyledMiniCard key={id}>
                      <img
                        src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${
                          name === "Nidoran-M"
                            ? "nidorino"
                            : name === "Nidoran-F"
                            ? "nidorina"
                            : name === "Mr.Mime"
                            ? "mr._mime"
                            : name.toLowerCase()
                        }.gif`}
                        alt={name}
                      />
                      <h3>{name}</h3>
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
