import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import PromocionesApp from "./components/PromocionesApp";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Gracias from "./components/Gracias";

function App() {
  return (
    <CartContextProvider>
    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/gracias/:id"} element={< Gracias/>} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <PromocionesApp />
        <Footer />
      </BrowserRouter>
    </div>
    </CartContextProvider>
)
}

export default App;
