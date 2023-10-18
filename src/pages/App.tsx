import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Inicio from "../components/inicio";
import Clientes from "../components/clientes";
import CargaClientes from "../components/cargaClientes";
import Success from "./Success";
import EliminarClientes from "../components/eliminarClientes";
import Error from "./Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/carga" element={<CargaClientes />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
        <Route path="/eliminar" element={<EliminarClientes />} />
      </Routes>
    </Router>
  );
}

export default App;
