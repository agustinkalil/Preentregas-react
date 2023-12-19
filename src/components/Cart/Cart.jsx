import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

  const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

  const handleVaciar = () => {
    vaciarCarrito();
  }
  
  return (
   <div className='container'>
      <h1 className='text-center'>Carrito De Compras</h1>


      {
       carrito.map((prod) => (
            <div className='mb-5' key={prod.id}>
                <h3>{prod.brand}</h3>
                <h3>{prod.model}</h3>
                <p>Precio unit: ${prod.price}</p>
                <p>Precio total: ${prod.price * prod.cantidad}</p>
                <p>Cant: {prod.cantidad}</p>
            </div>
       ))
      }

        {
        carrito.length > 0 ?
            <>
              <h3>Precio Total: ${precioTotal()}</h3>
              <button className='btn btn-success' onClick={handleVaciar}>Vaciar Carrito</button>
              <Link to="/checkout"><button className='btn btn-success ms-3 '>Finalizar Compra</button></Link>
            </> :
            <h2>El carrito esta vacio</h2>
        }
      
   </div>
  
  )
}
