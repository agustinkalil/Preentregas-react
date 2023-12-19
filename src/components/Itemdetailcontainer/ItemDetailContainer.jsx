import { useEffect, useState } from "react"
import { ItemDetail } from "../Itemdetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../config/firebaseConfig";

export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null) ;
  const {id} = useParams();
  
  

  useEffect(() => {
      const docRef = doc(db, "productos", id)
      getDoc(docRef)
        .then((resp) => {

            setItem(
              { ...resp.data(), id: resp.id}
            );
        })
  }, [id])
  
  return (
    <>
        {item && <ItemDetail item={item}/>}
    </>
  )
}
