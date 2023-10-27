import { createContext, useState } from "react";


export const CartContext = createContext ()
export const CartContextProvider =  ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addToCart = (item, quantity) => {  //      item, qty             implementa la funcionalidad para agregar un producto al carrito
        setCart([...cart, {...item, quantity}])
    }
    const removeList = () => {
        setCart([])
    }
    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
    return (
        <CartContext.Provider value={{cart, setCart,  addToCart, removeList, deleteItem}}>
            { children }
        </CartContext.Provider>
    );
}
