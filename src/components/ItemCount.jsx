import { useState } from "react"

const products = [
    {
        id: 1,
        name: "Pantalones Jordan",
        price: 200,
        stock: 6,
    }
]

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
            <div className="d-flex justify-content-center ">
                {products.map((product) => (
                    <div key={product.id}>
                        <h2 className="d-flex justify-content-center m-3 ">{product.name}</h2>
                        <div className="d-flex justify-content-center ">
                            {count === product.stock && <span className="m-3">Has seleccionado todo el stock disponible!!</span>}
                        </div>
                        <div className="d-flex justify-content-center m-4 gap-4">
                            <button disabled={count === 0} onClick={decrement} className="btn btn-primary " type="button"> - </button>
                            <p >Cantidad elegida: {count}</p>
                            <button disabled={count === product.stock} onClick={increment} className="btn btn-primary" type="button"> + </button>
                        </div>

                    </div>
                ))}
             
            </div>
    )
}


export default ItemCount