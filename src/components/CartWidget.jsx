import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget= () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() ? <Link to={"/cart"} className="btn button position-relative">
            <img src={"images/bag-black.png"} alt={"carrito"} width={32} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : "";

}

export default CartWidget;