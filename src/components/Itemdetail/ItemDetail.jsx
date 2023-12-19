
import React, { useContext, useState } from 'react'
import { ItemCount } from '../Itemcount/ItemCount'
import { CartContext } from '../../Context/CartContext'

export const ItemDetail = ({item}) => {

  const { carrito, agregarAlCarrito} = useContext(CartContext)
  console.log(carrito);


  const [cantidad, setCantidad] = useState(1)

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1) 
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1) 
  }



  

  return (
    <div className='border m-2'>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{item. brand}</h5>
                <h3 className='card-title'>{item.model}</h3>
                <img src={item.photo} alt={item.brand} />
                <p className='card-text border m-2'>Talles:{item.size}</p>
                <buttom className='card-text btn btn-success'>{item.price}</buttom>
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => {agregarAlCarrito(item, cantidad)}}/>
            </div>
        </div>
    </div>
  )

  }



