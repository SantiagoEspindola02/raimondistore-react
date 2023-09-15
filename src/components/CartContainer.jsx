import CartIcon from "./CartIcon"
import CartNumber from "./CartNumber"


const CartContainer = () => {
  return (
    <div>
        <CartNumber count={5} />
        <CartIcon color="cyan" />
    </div>
  )
}

export default CartContainer