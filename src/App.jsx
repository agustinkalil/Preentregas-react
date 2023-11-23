import { Cart, ItemListContainer, Navbar} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/category/:category" element={ <ItemListContainer/> }/>
            <Route path="/cart" element={ <Cart/> }/>
            
          </Routes>
    </BrowserRouter>
  )
}

export default App
