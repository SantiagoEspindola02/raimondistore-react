import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {

    const { addToCart } = useContext(CartContext)
    const onAdd = () => {
        addToCart(item)
    }
    return (
        <>
            <div className="d-flex justify-content-center flex-column p-6" style={{ maxWidth: "600px", backgroundColor: "grey", borderRadius: "20px" }}>
                <div className="d-flex justify-content-center">
                    <img className="mt-4 p-3" style={{ borderRadius: "30px", width: "200px", height: "200px" }} src={item.image} alt={item.title} />
                </div>
                <div>
                    <h2 className="d-flex justify-content-center m-3 text-center">{item.title}</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <h6 className="d-flex justify-content-center text-center m-2">{item.description}</h6>
                </div>
                <div>
                    <p className="d-flex justify-content-center">${item.price}</p>
                </div>
                <div>
                    <p className="d-flex justify-content-center">Stock disponible: {item.stock}</p>
                </div>
                <div className="d-flex justify-content-center mb-2 p-2 ">
                    <ItemCount stock={item.stock} />
                    <Link to={`/cart`}>
                        <button onClick={onAdd(item)} >Agregar al carrito</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ItemDetail