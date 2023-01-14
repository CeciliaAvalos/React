import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock]= useState(stock);
    const [vendido, setVendido] = useState(false);
    
    
    const incrementarStock = () => {
        if (counter < itemStock){
            setCounter (counter + 1);
        }
    }
    
    const decrementarStock = () => {
        if (counter > 1){
            setCounter (counter - 1);
        }
    }
    
    const addToCart = (quantity) => {
        setItemStock (itemStock - quantity);
        setCounter(1);
        setVendido (true);
        onAdd(quantity);
    }
    
    
    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <div className="container text-center">
      <div className="row mb-3">
        <div className="col-md-12">
        <div className="btn-group " role="group" aria-label="Basic outlined example">
            <button type="button" className="btn botonRosa" onClick={decrementarStock}>-</button>
            <button type="button" className="btn botonRosa">{counter}</button>
            <button type="button" className="btn botonRosa" onClick={incrementarStock}>+</button>
            </div>
        </div>
         <div className="row">
            <div className="col-md-12"> 
             {vendido ? <Link to={"/cart"} className="btn botonRosa col-md-6 mt-1">Finalizar mi compra</Link> :
            <button type="button" className="btn botonRosa col-md-6 mt-1" onClick={() => {addToCart (counter)}}>Agregar al Carrito</button>}
            </div>
         </div>
        </div>
        </div>
    )
 }
 
 export default ItemCount;
