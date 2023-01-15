import React from "react";
import { useParams, Link } from "react-router-dom";

const Gracias = () => {
    const {id} = useParams();
    return (
        <div className="container py-5">
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-danger text-center" role="alert"> <h1>FELICITACIONES!</h1>
                <h2>Tu compra se ha realizado con éxito!</h2>
                <p>Tu numero de orden es: <b>{id}</b></p>
                </div>
                <Link to={"/"} className="btn botonRosa text-center" >Volver a la Página Principal</Link>
            </div>

        </div>
    </div>
    )
}

export default Gracias;