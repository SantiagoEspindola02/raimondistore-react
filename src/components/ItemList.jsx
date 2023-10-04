
                                     

// import { useEffect, useState } from "react"
// import Item from "./Item"
// import ItemDetail from "./ItemDetail"


// const ItemList = () => {
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         response.then((products) =>{
//         setProducts(products)})
//     }, [])

//     if(products.length === 0)  return <h1 className="m-4">Loading...</h1>

//     return (
//         <>
//             <div className="p-4 d-flex gap-3">
//                 {products.map((product) => (
//                     <Item
//                         key={product.id}
//                         image={product.image}
//                         title={product.title}
//                         price={product.price}
//                     />
//                 ))}
//                 {products.map((product) =>(
//                     <ItemDetail
//                         key= {product.id}
//                         image={product.image}
//                         title={product.title}
//                         description={product.description}
//                         price={product.price}
//                         stock={product.stock} 
//                     />
//                 ))}
//             </div>
//         </>
//     )
// }

// export default ItemList
