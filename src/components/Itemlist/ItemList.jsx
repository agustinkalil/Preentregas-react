import { Item } from "../Item/Item"


export const ItemList = ({productos}) => {
  return (
    <>
    
  
        <h1 className="text-center">Bienvenidos a mi tienda!</h1>
        
          
                  <div className="d-flex flex-wrap">

                    {productos.map(producto => <Item key={producto.id} {...producto} />)}
                  </div>
                  
                  
                  
                </>
        
  )
}

