import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Error = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>OCURRIO UN ERROR</Alert.Heading>
        <p>
          Volver a intentarlo en unos minutos. <br />
          <br />
          Gracias!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/">
            <Button variant="danger">Inicio</Button>
          </Link>
        </div>
      </Alert>
    </>
  );
};

export default Error;
