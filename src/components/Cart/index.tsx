import { useContext } from "react"
import { MarketContext } from "../../Context/marketContext"
import EmptyCart from "./Emptycart"
import FullCart from "./FullCart"

const Cart = () => {

const { currentCart } = useContext(MarketContext)


    return (
        <>
    {currentCart?.length > 0 ?
    <FullCart/>
    :
    <EmptyCart/>}
        </>
    )
}

export default Cart