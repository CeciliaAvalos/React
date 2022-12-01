import React from "react";

const CartWidget= () => {
    return (
        <button type="button" className="btn fondoCarrito  position-relative">
            <img src={"images/bag-heart.svg"} alt={"carrito"} width={32} />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
</button>
    )
}

export default CartWidget;