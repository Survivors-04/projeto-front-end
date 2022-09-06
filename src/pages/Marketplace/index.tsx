import Cart from "../../components/Cart";
import EmptyCart from "../../components/Cart/Emptycart";
import FullCart from "../../components/Cart/FullCart";
import Header from "../../components/Header";
import PokemonBag from "../../components/PokemonBag";
import SearchFilter from "../../components/SearchFilter";
import StyledDivsMarket, { StyledDivSearchCard, StyledDivPokemonsMarket } from "./styles";

const Marketplace = () => {
  return (
    <>
    <Header/>
    <StyledDivsMarket>
      <StyledDivPokemonsMarket>
        <PokemonBag/>
      </StyledDivPokemonsMarket>
      <StyledDivSearchCard>
        <SearchFilter/>
        <Cart/>       
      </StyledDivSearchCard>
    </StyledDivsMarket>
    </>
  )
};

export default Marketplace;
