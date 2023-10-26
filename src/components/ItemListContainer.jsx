import { getProducts } from "../data/dataProducts"
import { useEffect, useState } from "react"
import Item from "./Item"
import Cart from "./CartContainer"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts()
    .then((data) => setProducts(data))
  }, [])

  if (products.length === 0) { return (<h1 className="d-flex justify-content-center m-4">Loading...</h1>) }

  return (
    <div>
      <div className="d-flex justify-content-center mt-3">{saludo}</div>
      <div className="d-flex justify-content-center p-1">
        {products.map((product) => (<Item
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          id= {product.id}
        />))}
        {products.map((product) => (<Cart
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        />))}
      </div>
    </div>
  )
}

export default ItemListContainer