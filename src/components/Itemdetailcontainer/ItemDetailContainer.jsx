/* import { useEffect, useState } from "react"
import { getProductById } from "../../data/asyncMock"
import { ItemDetail } from "../Itemdetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
  
  const { id } = useParams();
  const [item, setItem] = useState(null)

  useEffect(() => {
    getProductById(id)
    .then(resp => setItem(resp))
    .catch(error => console.log(error));
  }, [])
  
  return (
    <>
      {item && <ItemDetail {...item} />}
    </>
  )
}
 */