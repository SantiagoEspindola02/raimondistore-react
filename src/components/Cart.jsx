import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"


const Cart = () => {

    const { cart, removeList, total } = useContext(CartContext)

    return (
        <div>

            {cart.length ? <div>
                {cart.map((product) => <CartItem key={product.id} product={product} />)}
                <p>Total a pagar: ${total()}</p>
                <button className="btn btn-danger" onClick={removeList}>Vaciar carrito</button>
                <Link className="btn btn-dark">Finalizar tu compra</Link>
            </div>
                : <div>
                    <h3>No has añadido productos en tu carrito</h3>
                    <Link to={"/"} className="btn btn-dark">Ir a comprar</Link>
                </div>
            }
        </div>

    )

}

export default Cart