import { useContext, useEffect, useState } from "react"
import { getProductById } from "../data/dataProducts"
import ItemDetail from "./ItemDetail"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../context/cartContext"



const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const { productId } = useParams()


  useEffect(() => {
    getProductById(Number(productId))
      .then((data) => setProduct(data))
  }, [productId])

  if (!product) { return (<h1 className="d-flex justify-content-center m-4">Loading...</h1>) }

  const cartContextData = useContext(CartContext)
  const onAdd = (product) => {
    cartContextData.addToCart(product)
  }
    return (
      <div>
        <div className="d-flex justify-content-center p-1">
          <ItemDetail
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            stock={product.stock}
          />
          <Link key={product.key} to={`/cart`}>
            <button onClick={onAdd(product)} >Agregar al carrito</button>
          </Link>
        </div>
      </div>
    )
  
}
  export default ItemDetailContainer
