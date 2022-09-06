import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import StyledSinglePokemon, { StyledButtonBag } from "./styles";
import apiMarket from "../../services/apiMarket";
import { IMarket, MarketContext } from "../../Context/marketContext";
import { toast } from "react-toastify";

const PokemonBag = () => {
  const [market, setMarket] = useState<IMarket[]>([]);
  const { currentCart, setCurrentCart, total, setTotal } =
    useContext(MarketContext);

  useEffect(() => {
    const markList = async () => {
      const marketList = await apiMarket();
      const marketData = marketList?.data;
      console.log(marketData);
      setMarket(marketData);
    };

    markList();
  }, []);

  // const pokeBuy = (id: string | number) => {
  //   if (currentCart?.find((e) => e.id === Number(id))) {
  //     toast.error("Não é possivel adicionar itens duplicados");
  //   } else {
  //     const addToCart = market.find((e) => e.id === id);
  //     setCurrentCart([...currentCart, addToCart]);
  //   //   setCurrentCart(oldCart => [...oldCart, addToCart])
  //     setTotal(total + 100);
  //   }
  // };

  return (
    <>
      {market.map((e) => (
        <StyledSinglePokemon>
          <img
            src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${e.Pokemon.toLowerCase()}.gif`}
            alt="preso"
          />
          <h2>{e.Pokemon}</h2>
          <StyledButtonBag>{e.Type01}</StyledButtonBag>
          {e.Type02 === "null" ? (
            <></>
          ) : (
            <StyledButtonBag>{e.Type02}</StyledButtonBag>
          )}
          <h4>{e.Rarity}</h4>
          <div>
            <span>Preço:</span>
            <p>100g</p>
          </div>
          {/* <Button width={80} onClick={() => pokeBuy(e.id)}>
            Adicionar ao carrinho
          </Button> */}
        </StyledSinglePokemon>
      ))}
    </>
  );
};

export default PokemonBag;
