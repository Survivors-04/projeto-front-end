import Button from "../../Button"
import StyledEmptyCart, { StyledDivTotal } from "./styles"

const EmptyCart = () => {
    return(
        <StyledEmptyCart>
            <h2>Carrinho</h2>
            <p>Carrinho vazio</p>
            <div>
                <StyledDivTotal>
                    <h4>Valor</h4>
                    <h4>Total</h4> 
                </StyledDivTotal>               
                <Button width={80} onClick={() => console.log("ola babaca")}>Comprar</Button>
            </div>
            
        </StyledEmptyCart>
    )
}

export default EmptyCart