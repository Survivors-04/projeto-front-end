import { useContext } from "react"
import { MarketContext } from "../../../Context/marketContext"
import Button from "../../Button"
import MiniPokemonCard from "../MiniPokemonCard"
import StyledFullCart, { StyledDivTotal, StyledDivOverflow } from "./styles"

const FullCart = () => {

    const { total } = useContext(MarketContext)

    return(
        <StyledFullCart>
            <h2>Carrinho</h2>
            <StyledDivOverflow>
                <MiniPokemonCard/>
            </StyledDivOverflow>
               
                <StyledDivTotal>
                    <h4>Valor</h4>
                    <h4>{total}g</h4> 
                    <Button width={80} onClick={() => console.log("ola babaca")}>Comprar</Button>
                </StyledDivTotal> 
                            
        </StyledFullCart>
    )
}

export default FullCart