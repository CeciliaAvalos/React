import React from "react";
import {Link} from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
        <div className="cardimg card border border-0 botonRosa cardFondo ">
            <img src={item.imagen} className="img" alt={item.nombre} />
            <div className="card-body text-center bg-white ">
                <p className="card-text " >{item.nombre}</p>
            </div>
        </div>
        </Link>    
    )
}


export default Item;