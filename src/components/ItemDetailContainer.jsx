import { useEffect, useState } from "react"
//import { getProductById } from "../data/dataProducts"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const { productId } = useParams()

  
  useEffect(() => {
    
    const docRef= doc(db, "products", productId)
    getDoc(docRef)
      .then((resp) => {
        setProduct(
          {...resp.data(),productId: resp.id}
        )
      })
  
  
  }, [productId])
  
  // getProductById(Number(productId))
  //   .then((data) => setProduct(data))

  if (!product) { return (<h1 className="d-flex justify-content-center m-4">Loading...</h1>) }

    return (
      <div>
        <div className="d-flex justify-content-center p-1">
          <ItemDetail
            item = {product}
          />
        </div>
      </div>
    )
  
}
  export default ItemDetailContainer
