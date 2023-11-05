
import { Cartwidget } from "../CartWidget/Cartwidget"
import styles from "./navbar.module.css"


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href=""><img className={styles.logo} src="img/yellow-handbag-and-black-t-shirt.webp" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre Nosotros</a>
          </li>
        </ul>
        
          <Cartwidget/>
      </div>
    </div>
  </nav>
  )
}

