import CartIcon from "./CartIcon"
import CartNumber from "./CartNumber"


const CartWidget = () => {
  return (
    <div>
        <CartNumber style={{textDecoration: "none", textDecorationColor:"none"}} />
        <CartIcon color="cyan" />
    </div>
  )
}

export default CartWidget