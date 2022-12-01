import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import PromocionesApp from "./components/PromocionesApp";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
        <NavBar/>
        <ItemListContainer greeting={"No se encontraron productos"} />
        <PromocionesApp />
        <Footer />
    </div>
)
}

export default App;
