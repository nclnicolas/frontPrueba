import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../App.css";

const Inicio = () => {
  return (
    <div className="container">


      <div className="title-consulta">
        <h1>Consulta de Usuarios:</h1>
        <Link to="/clientes">
          <Button variant="outline-dark">Consulta</Button>
        </Link>
      </div>

      <div className="title-consulta">
        <h1>Cargar Usuarios:</h1>
        <Link to="/clientes/carga">
          <Button variant="outline-dark">Carga</Button>
        </Link>
      </div>

      <div className="title-consulta">
        <h1>Eliminar Usuarios:</h1>
        <Link to="/eliminar">
          <Button variant="outline-dark">Eliminar</Button>
        </Link>
      </div>

    </div>
  );
};

export default Inicio;
