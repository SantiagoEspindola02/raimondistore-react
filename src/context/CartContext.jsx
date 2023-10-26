import { createContext, useState } from "react";


export const CartContext = createContext ()
export const CartContextProvider =  ({children}) => {
    const [cartList, setCartList] = useState([])
    const addToCart = (item) => {  //      item, qty             implementa la funcionalidad para agregar un producto al carrito
        setCartList(item)
    }
    const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
    }
    const deleteItem = () => {   //     id              	implementa la funcionalidad para borrar un producto del carrito
    }
    return (
        <CartContext.Provider value={{cartList, setCartList,  addToCart, removeList, deleteItem}}>
            { children }
        </CartContext.Provider>
    );
}
