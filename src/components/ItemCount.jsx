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
            <div className="d-flex justify-content-center align-items-center">
                {products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        {count >= 5 && <span>Has seleccionado todo el stock disponible!!</span>}
                        <p disabled= {count === 5} >Cantidad elegida: {count}</p>
                        <div>
                            <button disabled={count === 0} onClick={decrement} className="btn btn-primary" type="button"> - </button>
                            <button disabled={count === 5} onClick={increment} className="btn btn-primary" type="button"> + </button>
                        </div>

                    </div>
                ))}
            
            </div>
    )
}


export default ItemCount