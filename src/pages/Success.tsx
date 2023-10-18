import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Success = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>USUARIO CREADO EXITOSAMENTE!!</Alert.Heading>
        <p>
          Gracias.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/">
            <Button variant="success">Inicio</Button>
          </Link>
        </div>
      </Alert>
    </>
  );
};

export default Success;
