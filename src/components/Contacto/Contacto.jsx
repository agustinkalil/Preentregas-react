import React, { useState } from 'react'

export const Contacto = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado", {nombre, email});
    }

    const handleNombre = (e) => {
       setNombre(e.target.value);
       

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

  return (
        <>
            <h1 className='main-title mb-5 text-center'>Contacto</h1>

            <div className='container'>
                <form onSubmit={handleSubmit}>
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
                        <label for="exampleInputPassword1" class="form-label">Ingresa tu E-mail</label>
                        <input 
                        type="email" 
                        class="form-control" id="exampleInputEmail1"
                        value={email}
                        onChange={handleEmail}
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </>
  )
}
