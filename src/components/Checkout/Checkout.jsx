import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'

export const Checkout = () => {

    const [IdPedido, setIdPedido] = useState("")

    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    const comprar = (e) => {
        e.preventDefault();
        const pedido = {
            cliente: nombre,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
        
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setIdPedido(doc.id)
                vaciarCarrito();
            })
    }


    if(IdPedido){
        return (
            <>
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>El pedido de tu compra es: ${IdPedido}</p>
            </div>

            
                           
            </>
        )
    }

    const handleNombre = (e) => {
       setNombre(e.target.value);
       

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

  return (
        <>
            <h1 className='main-title mb-5 text-center'>Finalizar Compra</h1>

            <div className='container'>
                <form onSubmit={comprar}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Ingresa tu nombre</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        value={nombre}
                        onChange={handleNombre}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Ingresa tu E-mail</label>
                        <input 
                        type="email" 
                        class="form-control" id="email"
                        value={email}
                        onChange={handleEmail}
                        />

                        <label for="confirmarEmail" class="form-label">Vuelve a ingresar tu E-mail</label>        
                        <input 
                        type="email" 
                        class="form-control" id="confirmarEmail"
                        />

                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Comprar</button>
                </form>
            </div>
        </>
  )
}
