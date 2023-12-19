import { Item } from "../Item/Item"


export const ItemList = ({productos, titulo}) => {
  return (
    <>
    
  
        <h1 className="text-center mb-5 mt-5 ">{titulo}</h1>
        
          
                  <div className="d-flex flex-wrap">

                    {productos.map(producto => <Item key={producto.id} {...producto} />)}
                  </div>
                  
                  
                  
                </>
        
  )
}

