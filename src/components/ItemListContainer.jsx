//import { getProducts } from "../data/dataProducts"
import { useEffect, useState } from "react"
import Item from "./Item"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const productsRef = collection(db, "products")
    getDocs(productsRef)
      .then((resp) => {
      
        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [])

  // getProducts()
  // .then((data) => setProducts(data))

  if (products.length === 0) { return (<h1 className="d-flex justify-content-center m-4">Loading...</h1>) }

  return (
    <div>
      <div className="d-flex justify-content-center mt-3">{saludo}</div>
      <div className="d-flex justify-content-center p-3 gap-5 flex-wrap">
        {products.map((product) => (<Item
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          id={product.id}
        />))}
      </div>
    </div>
  )
}

export default ItemListContainer