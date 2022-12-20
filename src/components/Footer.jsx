import React from "react";

const Footer = ()=> {
    return (
        <div className="container-fluid fondoFucsia">
            <div className="container py-5">
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <img src={"/images/LogoDeliciasSandy.png"} alt={"Delicias Sandy"} width={90} />
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com/search/top?q=delicias%20sandy"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/Facebook_Logo_(2019).png"} alt="Facebook" width={43} /></a>
                            <a href={"https://www.instagram.com/deli.ciassandy/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/instagram.png"} alt="Instagram" width={43} /></a>
                            <a href={"https://www.whatsapp.com/?lang=es"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/whatsapp.png"} alt="Whatsapp" width={43} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;