import React, { useContext } from "react";
import {CartContext} from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumaTotal} = useContext(CartContext);

    if (cartTotal () === 0){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert"> No se encontraron productos en el Carrito!
                        </div>
                        <Link to={"/"} className="btn botonRosa text-center" >Volver al inicio</Link>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 botonRosa">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                                </tr>
                        </thead>
                        <tbody>
                            {cart.map (item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-end"><Link onClick={() => {removeItem(item.id)}}><img src={"images/eliminar.svg"} alt={"Eliminar Producto"} width={20} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td><b>Total</b></td>
                                <td><b>${sumaTotal()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                        </table>
                                <tr>
                                    <tr scope="col" className="text-end" colSpan={5} ><Link onClick={clear} className="btn vaciarCarrito">Vaciar Carrito</Link></tr>
                                </tr>
                </div>
            </div>

        </div>
    )
}
export default Cart