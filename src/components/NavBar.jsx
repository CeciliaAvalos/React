import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
<div className="row">
<div className="col-md-6">
<nav className="navbar navbar-expand-lg navBar">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><img src={"images/LogoDeliciasSandy.png"} alt={"DeliciasSandy"} width={80} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">Tortas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to={"/category/tortas"} > Tartas</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/category/tartas"} > Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link">Hacé tu reserva!</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<div className="col-md-6 d-flex justify-content-end align-items-center">
    <CartWidget />
</div>
</div>
      );
    }
    
export default NavBar