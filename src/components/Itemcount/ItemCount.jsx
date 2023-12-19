export const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {
  

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={handleRestar} type="button" className="btn btn-dark">-</button>
            <button type="button" className="btn btn-dark">{cantidad}</button>
            <button onClick={handleSumar} type="button" className="btn btn-dark">+</button>
      </div>
      <div className='text-center'>
        <button className="btn btn-success btn-lg mt-3" onClick={handleAgregar}>Agregar al carrito</button>
      </div>
    </>
  )
}
