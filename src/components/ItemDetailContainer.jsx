import { useEffect, useState } from "react"
import { getProductById } from "../data/dataProducts"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
  
    const [product, setProduct] = useState(null)
    const  { productId }  = useParams()

    console.log(productId)

    useEffect(() => {
      getProductById(Number(productId))
      .then((data) => setProduct(data))
    }, [productId])

    if (!product) { return (<h1 className="d-flex justify-content-center m-4">Loading...</h1>) }
  
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
        </div>
      </div>
    )
  }
  
  export default ItemDetailContainer
