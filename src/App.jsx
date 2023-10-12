
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (


    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path= '/' element={<ItemListContainer saludo="BIENVENIDOS A MI E-COMMERCE" />} />
        <Route exact path='/product/:productId' element={<ItemDetailContainer />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
