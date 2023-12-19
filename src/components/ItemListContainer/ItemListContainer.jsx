import { useEffect, useState } from "react"
import { ItemList } from "../Itemlist/ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { seedProducts } from "../../Utils/seedProducts";

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  
  const [titulo, setTitulo] = useState("Bienvenidos a mi tienda!");

  const category = useParams().category;
  

  
  useEffect(() => {
      const productosRef = collection(db, "productos");
    
      const q = category ? query( productosRef, where("category", "==", category)) : productosRef;
    
      getDocs(q)
        .then((resp) => {
    
          setProductos( 
                        resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
              })
            );
        })

        //seedProducts()
    }, [category])
  
  return (
    <>
    {<ItemList productos={productos} titulo={titulo}/>}
    
    </>
  )
    
};
















//llamado al asyncMock

/* setIsLoading(true)
      getProducts()

        .then((resp) => {
            if(category){
              const productosFilter = resp.filter( producto => producto.category === category)
              settitulo(category)

                  if(productosFilter.length > 0){
                    setProductos(productosFilter)
                  }else{
                    setProductos(resp);
                  }

            }else {
              setProductos(resp)
              settitulo("Bienvenidos a mi tienda!")
            }

          setIsLoading(false)
        }
          )
        .catch((error) => console.log(error)); */