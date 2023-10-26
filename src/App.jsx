
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'
import Cart from './components/Cart'


function App() {

  return (

    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer saludo="BIENVENIDOS A MI E-COMMERCE" />} />
            <Route exact path='/product/:productId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
