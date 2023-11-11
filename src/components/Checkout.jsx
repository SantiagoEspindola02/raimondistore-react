import { useContext, useState } from "react"
import { CartContext } from "../context/cartContext"
import { useForm } from "react-hook-form"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"



const Checkout = () => {

    const [orderId, setOrderId] = useState("")

    const { cart, removeList, total } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const buy = (data) => {
        const order = {
            buyer: data,
            products: cart,
            total: total(),
            date: serverTimestamp()
        }
        console.log(order)

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                removeList()
            })
    }

    if (orderId) {
        return (
            <div className="container">
                <h1 className="main-title">MUCHAS GRACIAS POR TU COMPRA!!</h1>
                <p>Tu numero de pedido es: <span><strong> {orderId}</strong></span></p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario d-flex flex-column gap-3" style={{ width: "30rem" }} onSubmit={handleSubmit(buy)} >

                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}

export default Checkout