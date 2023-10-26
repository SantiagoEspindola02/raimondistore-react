import { Link } from "react-router-dom"
import Brand from "./Brand"
import CartContainer from "./CartContainer"
import CategoryItem from "./CategoryItem"
import MenuButton from "./MenuButton"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Brand />
        <Link to = {`/cart`}>
          <CartContainer />
        </Link>
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CategoryItem  name = "Chombas" />
            </li>
            <li className="nav-item">
              <CategoryItem  name = "Pantalones" />
            </li>
            <li className="nav-item">
              
              <CategoryItem  name = "Sneackers" />
            </li>
            <li className="nav-item">
              <CategoryItem  name = "Abrigos" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar