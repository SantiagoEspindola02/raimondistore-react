import { useContext } from "react"
import { CartContext } from "../context/cartContext"

const CartItem = ({product}) => {
const {deleteItem} = useContext(CartContext)

  return (
    <div className="d-flex justify-content-around align-items-center m-3" style={{backgroundColor: "grey", borderRadius: "30px"}}>
        <img src={product.image} alt={product.title} width={"100px"}/>
        <p>{product.title}</p>
        <p>Precio: ${product.price}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button className="btn btn-danger" onClick={() => deleteItem(product.id)}> X</button>
    </div>
  )
}

export default CartItem
