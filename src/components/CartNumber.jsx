import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const CartNumber = () => {

  const {cartQuantity} = useContext(CartContext)

  return (
    <span style={{fontSize: "10px"}}>{cartQuantity()}</span>
  )
}

export default CartNumber