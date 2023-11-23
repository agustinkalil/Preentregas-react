import { useEffect, useState } from "react"
import { getProducts } from "../../data/asyncMock"
import { ItemList } from "../Itemlist/ItemList"
import { useParams } from "react-router-dom";
import styles from "./loading.module.css"

export const ItemListContainer = () => {
  const { category } = useParams();
  
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
      setIsLoading(true)
      getProducts()

        .then((resp) => {
            if(category){
              const productosFilter = resp.filter( producto => producto.category === category)

                  if(productosFilter.length > 0){
                    setProductos(productosFilter)
                  }else{
                    setProductos(resp);
                  }

            }else {
              setProductos(resp)
            }

          setIsLoading(false)
        }
          )
        .catch((error) => console.log(error));
    }, [category]);
  
  return (
    <>
    { isLoading ? <div className={styles.spinner}></div> : <ItemList productos={productos} />}
    
    </>
  )
    
};

