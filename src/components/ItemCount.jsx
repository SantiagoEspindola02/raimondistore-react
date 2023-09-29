


import { useState } from "react"
    const ItemCount = () => {
        const [products, setProducts] = useState([])
    // const [count, setCount] = useState(0)

    const increment = (id) => {
        const newProducts = products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    count: product.count + 1
                }
            }
            return product    
        })
        setProducts(newProducts)
    }

    const decrement = (id) => {
        const newProducts = products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    count: product.count - 1
                }
            }
            return product
        })
        setProducts(newProducts)
    }

    return (
        <div className="d-flex justify-content-center ">
            {products.map((product) => (
                <div key={product.id}>
                    <div className="d-flex justify-content-center ">
                        {product.count === product.stock && <span className="m-3">Has seleccionado todo el stock disponible!!</span>}
                    </div>
                    <div className="d-flex justify-content-center m-4 gap-4">
                        <button disabled={product.count === 0} onClick={() => decrement(product.id)} className="btn btn-primary " type="button"> - </button>
                        <p>Cantidad elegida: {product.count}</p>
                        <button disabled={product.count === product.stock} onClick={() => increment(product.id)} className="btn btn-primary" type="button"> + </button>
                    </div>

                </div>
            ))}

        </div>
    )
}


export default ItemCount