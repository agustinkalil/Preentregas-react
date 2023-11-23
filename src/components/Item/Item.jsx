import { Link } from "react-router-dom"
import styles from "./container.module.css"

export const Item = ({id, brand, model, price, photo}) => {
  return (
                <div className={styles.card}>
                   <img src={photo} className="card-img-top" alt={brand}/>
                   <div className="card-body">
                     <h5 className="card-title">{brand}</h5>
                     <p className="card-text">{model}</p>
                     <Link to={`/item/${id}`}>
                       <button className="card-text btn btn-outline-success">Detalles</button>
                     </Link>
                     <a href="#" className="btn btn-success">${price}</a>
                   </div>
                </div>
  )
}
