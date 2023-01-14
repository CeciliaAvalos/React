import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc} from "firebase/firestore";

const Checkout =() => {
    const {cart, clear, sumaTotal, cartTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [orderId, setOrderId] = useState("");
    
    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map (item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`,
            total: sumaTotal(),
            quantity: cartTotal()
        };

        const fs = getFirestore();
        const orederCollection = collection(fs, "orders");
        addDoc(orederCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const orderDoc = doc(fs, "orders", snapShot.id);
            updateDoc(orderDoc, {total: order.total * 1.5});

            clear ();
            

        });
    }
    return (

    <div className="container">
        <div className="row my-5">
            <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="texto" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e) => {setNombre(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="texto" className="form-control" id="email" placeholder="Ingrese su email" onInput={(e) => {setEmail(e.target.value)}}></input>
                        </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="texto" className="form-control" id="telefono" placeholder="Numero de telefono" onInput={(e) => {setTelefono(e.target.value)}}></input>
                    </div>
                    
                    <button type="button" onClick={generarOrden}className="text-center btn generarOrden">Generar Orden</button>
                </form>
                    </div>

            <div className="col">
                <table className="table">
                <tbody>
                    {cart.map (item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.nombre} width={64}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                        </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="text-end"><b>Total a pagar</b></td>
                            <td className="text-center"><b>${sumaTotal()}</b></td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
        <div className="row my-5">
            <div className="col text-center">
                {orderId ? <div className="alert alert-success" role="alert">
                    <h1>FELICITACIONES!</h1>
                    <h2>Tu compra se ha realizado con éxito!</h2>
                    <p><b>Tu número de orden es: {orderId}</b></p>
                </div> :
                console.log(alert)}

            </div>

            </div>

        </div>
    )
}

export default Checkout;