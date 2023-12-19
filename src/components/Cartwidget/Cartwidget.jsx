import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"


export const Cartwidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext)
  return (
    <Link className="menu-link text-black" to="/cart"><div className="d-flex me-4"><i className="bi bi-bag mx-1 h5"></i><p className="">{cantidadEnCarrito()}</p></div></Link>
  )
}

