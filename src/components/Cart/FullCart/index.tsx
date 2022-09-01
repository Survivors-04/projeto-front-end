import Button from "../../Button"
import MiniPokemonCard from "../MiniPokemonCard"
import StyledFullCart, { StyledDivTotal, StyledDivOverflow } from "./styles"

const FullCart = () => {
    return(
        <StyledFullCart>
            <h2>Carrinho</h2>
            <StyledDivOverflow>
                <MiniPokemonCard/>
            </StyledDivOverflow>
               
                <StyledDivTotal>
                    <h4>Valor</h4>
                    <h4>Total</h4> 
                    <Button width={80} onClick={() => console.log("ola babaca")}>Comprar</Button>
                </StyledDivTotal> 
                            
        </StyledFullCart>
    )
}

export default FullCart