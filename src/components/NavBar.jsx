import { Link } from "react-router-dom"
import Brand from "./Brand"
import CategoryItem from "./CategoryItem"
import MenuButton from "./MenuButton"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex gap-2">
        <Brand />
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/category/chombas"><CategoryItem name="Chombas" /></Link>
            </li>
            <li className="nav-item">
              <Link to="/category/pantalones"><CategoryItem name="Pantalones" /></Link>
            </li>
            <li className="nav-item">
              <Link to="/category/sneackers"><CategoryItem name="Sneackers" /></Link>
            </li>
            <li className="nav-item">
              <Link to="/category/abrigos"><CategoryItem name="Abrigos" /></Link>
            </li>
          </ul>
        </div>
        <Link to={`/cart`} style={{ textDecoration: "none", textDecorationColor: "none" }}>
          <CartWidget />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar