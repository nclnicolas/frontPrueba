import React, { useEffect, useState } from 'react'
import Input from './input'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Error from '../pages/Error'
import '../styles/cargaClientes.css';

const CargaClientes = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const input = nombre.trim() !== '' && email.trim() !== '' && telefono.trim() !== '';
        setDisabled(!input);
    }, [nombre, email, telefono])

    const handleEnviarUsuario = async() => {
        const userData = { nombre, email, telefono }

        try {
            const response = await axios.post('https://back-prueba-698p.onrender.com/datos/usuarios', userData);

            navigate('/Success')
        } catch (error) {
          navigate('/error')
        }
    }

  return (
    <>
      <div className='container-clientes'>
        <h1>Carga los datos de los nuevos Usuarios</h1>

        <Input title='Nombre' value={nombre} onChange={setNombre}/>
        <Input title='Email' value={email} onChange={setEmail}/>
        <Input title='Telefono' value={telefono} onChange={setTelefono}/>

        <div className='button-carga-clientes'>
          <Button variant="outline-dark" disabled={disabled} onClick={handleEnviarUsuario}>Enviar Usuario</Button>
        </div>
        <div className='button-inicio-carga-clientes'>
          <Link to='/'>
            <Button variant="outline-dark">Inicio</Button>
          </Link>
        </div>

      </div>
    
    </>
  )
}

export default CargaClientes