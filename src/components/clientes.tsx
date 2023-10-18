import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { useDataUsers } from "../hooks/useDataUsuarios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Error from "../pages/Error";
import '../styles/clientes.css'

const Clientes = () => {
  const { data, isError, error, isFetching, status } = useDataUsers();

  if (isFetching) return (
    <div className="spinner-container">
        <Spinner animation="border"/>
    </div>
    )

  return (
    <>
      {isError || error ? (
        <Error />
      ) : (
        <>
          <div className="container-clientes">
            <h1 className="text-center">Lista de Usuarios</h1>
            <div className="d-flex justify-content-center flex-wrap">
              {data.allUsuarios.map((usuario: any) => (
                <Card
                  style={{ width: "18rem" }}
                  key={usuario.uid}
                  className="mb-3 mx-3 col-md-4 col-sm-6 mb-3"
                >
                  <Card.Img variant="top" src="src\images\usuario.jpg" />
                  <Card.Body>
                    <Card.Title>{usuario.nombre.toUpperCase()}</Card.Title>
                    <Card.Text>
                      Email: {usuario.email} <br />
                      Telefono: {usuario.telefono}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          

          <div className="d-flex justify-content-center">
            <Link to="/">
              <Button variant="info" style={{ marginTop: "100px" }}>
                Inicio
              </Button>
            </Link>
          </div>
          </div>
        </>
      )}
    </>
  );
};
export default Clientes;
