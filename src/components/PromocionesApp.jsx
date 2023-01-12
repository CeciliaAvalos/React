import React from "react";

const PromocionesApp = () => {
    return (
        <div className="row">
            <div className="d-flex justify-content-center">
                <img src={"images/nuevos-productos.png"} alt={"nuevos productos"} width={1000}/>
            </div>
            <div className="justify-content-center text-center">
                <h1 className="fondoFucsia">Tenemos nuevos productos y envios gratis a todo el pais!!</h1>
                <div>
                <img src={"images/envios-gratis.png"} alt={"envios gratis"} width={700} />
                </div>
                <div>
                
                <h3>Comunicate con nosotros a traves de nuestras redes!</h3>
                
                </div>
                <div className={"d-flex justify-content-center"}>
                    <a href="https://www.instagram.com/deli.ciassandy/" target={"_blank"} rel="noreferrer"> <img src={"images/instagram.png"} alt={"instagram"} width={65} /></a>
                    <p className="redes">deli.ciassandy</p> 
                <div className={"d-flex p-2 "}>
                <a href="https://www.whatsapp.com/?lang=es" target={"_blank"} rel="noreferrer"> <img src={"images/whatsapp.png"} alt={"whatsapp"} width={63}/></a> 
                <p className="redes">Nuestro Whatsapp!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PromocionesApp;