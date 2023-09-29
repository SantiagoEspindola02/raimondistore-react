
import './App.css'
// import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/Navbar'


function App() {

  return <div>
    <NavBar />
    <ItemListContainer saludo="BIENVENIDOS A MI E-COMMERCE" />
    {/* <ItemDetailContainer />     */}
  </div>
}

export default App
