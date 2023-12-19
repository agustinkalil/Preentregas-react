import { CartProvider } from "./Context/CartContext";
import { Cart, ItemDetailContainer, ItemListContainer, Navbar} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contacto } from "./components/Contacto/Contacto";
import { Checkout } from "./components/Checkout/Checkout";



function App() {

 
  return (
         <CartProvider>

            <BrowserRouter>
                <Navbar/>
                  <Routes>
                    <Route path="/" element={ <ItemListContainer/> }/>
                    <Route path="/category/:category" element={ <ItemListContainer/> }/>
                    <Route path="/item/:id" element={ <ItemDetailContainer /> }/>
                    <Route path="/cart" element={ <Cart/> }/>      
                    <Route path="/contacto" element={ <Contacto/> }/>   
                    <Route path="/checkout" element={ <Checkout/> }/>   
                    
                  </Routes>
                  
            </BrowserRouter>

          </CartProvider>
  )
}

export default App
