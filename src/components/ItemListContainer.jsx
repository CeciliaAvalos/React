import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 fondoFucsia text-center">
                    <p>{greeting}</p>
                </div>
                <ItemCount stockItems={15} />
            </div>
        </div>
    )
}
export default ItemListContainer;