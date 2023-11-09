//import { getProducts } from "../data/dataProducts"
import { useEffect, useState } from "react"
import Item from "./Item"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const category = useParams().category

  useEffect(() => {
    const productsRef = collection(db, "products")
    
    const q = category? query(productsRef, where("category", "==", category)) : productsRef

    getDocs(q)
      .then((resp) => {
      
        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [category])

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