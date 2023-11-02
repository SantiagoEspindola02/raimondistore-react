import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const CartNumber = () => {

  const { cartQuantity } = useContext(CartContext)

  return (<>
    {cartQuantity() > 0 && <span style={{ fontSize: "12px", textDecoration:"none" }}>{cartQuantity()}</span>}
  </>)
}

export default CartNumber