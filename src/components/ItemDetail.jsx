import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const [stockItem, setStockItem] = useState(0)

    const onAdd = (quantity) => {
        setStockItem (quantity);
    }


    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1> {item.nombre} </h1>
                <p> {item.descripcion} </p>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
        )
}

export default ItemDetail;