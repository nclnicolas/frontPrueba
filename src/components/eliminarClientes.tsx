import React, { useState } from 'react'
import '../styles/eliminarClientes.css';
import Input from './input';
import { useDataUsers } from '../hooks/useDataUsuarios';
import { Button } from 'react-bootstrap';

const EliminarClientes = () => {

  const [nombre, setNombre] = useState('');
  const [result, setResult] = useState([]);
  const { data, isFetching } = useDataUsers();

  const handleBuscarUsuario = async(data: any) => {

    const resultado = await data.allUsuarios.filter((user: any) => {
      user.nombre === nombre.toUpperCase();
    })

    setResult(resultado)
  }


  return (
    <div className='container-eliminar-clientes'>
      
      <h1>Buscar por nombre: </h1>
        <Input title='Nombre' value={nombre} onChange={setNombre}/>

      <div className='button-carga-clientes'>
        <Button variant="outline-dark" onClick={() => handleBuscarUsuario(data)}>Buscar Usuario</Button>
      </div>

      {!nombre 
        ? 'No hay Resultados'
        : `Resultados: ${result}` 
      }

    </div>
  )
}

export default EliminarClientes