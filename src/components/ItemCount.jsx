


import { useState } from "react"

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count >= stock) {
            return alert("Estas llevando todos los productos")
        }
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return (
        <div className="d-flex justify-content-center flex-column ">

            <div className="d-flex justify-content-center text-center">
                {count === stock && <span className="m-3">Has seleccionado todo el stock disponible!!</span>}
            </div>

            <div className="d-flex justify-content-center m-4 gap-4">
                <button disabled={count === 0} onClick={decrement} className="btn btn-primary " type="button"> - </button>
                <p>Cantidad elegida: {count}</p>
                <button disabled={count === stock} onClick={increment} className="btn btn-primary" type="button"> + </button>
            </div>

        </div>
    )
}


export default ItemCount

