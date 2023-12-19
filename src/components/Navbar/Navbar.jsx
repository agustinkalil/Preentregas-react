import { Link } from "react-router-dom"
import { Cartwidget } from "../Cartwidget/Cartwidget"
import styles from "./navbar.module.css"


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img className={styles.logo} src="img/yellow-handbag-and-black-t-shirt.webp" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre Nosotros</a>
          </li>
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Modelos
              </a>
              <ul className="dropdown-menu">
                  <li><Link to="/category/Adidas" className="dropdown-item" href="#">Adidas</Link></li>
                  <li><Link to="/category/Nike" className="dropdown-item" href="#">Nike</Link></li>
                  <li><Link to="/category/New Balance" className="dropdown-item" href="#">New Balance</Link></li>
              </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
        <Link to="/cart"> 
          <Cartwidget/>
        </Link>
  </nav>
  )
}

