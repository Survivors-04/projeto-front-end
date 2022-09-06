import StyledMiniCard from "./styles"
import { useContext } from "react"
import { MarketContext } from "../../../Context/marketContext";
import { BsTrash } from "react-icons/bs"


const MiniPokemonCard = () => {

    const { currentCart, setCurrentCart, total, setTotal } = useContext(MarketContext)

    function singleRemove(id : string | number){
        const removeCartItens = currentCart.filter((e) => e.id !== id);
        setCurrentCart(removeCartItens);
        setTotal(total - 100);
        
      }
    return(
        <>
        {currentCart.map((e) => (
        <StyledMiniCard>
            <img src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${e.Pokemon.toLowerCase()}.gif`} alt={e.Pokemon}/>
            <div>
                <p>{e.Pokemon}</p>
                <p>Preço</p>
                <p>100</p>
            </div>
            <BsTrash onClick={() => singleRemove(e.id)}/>
        </StyledMiniCard>
        ))}
        </>
    )
}

export default MiniPokemonCard