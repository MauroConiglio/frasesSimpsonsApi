import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import logo from './assets/logosimpson.png'
import Frase from './components/Frase.jsx'
import { useEffect, useState } from 'react';
import { Commet } from 'react-loading-indicators';
function App() {
    const [personaje, setPersonaje] = useState({})
    useEffect(()=>{
      consultarAPI();
    }, [])

    const consultarAPI = async()=>{
      //FetchAPI
      //solicitud GET (POST,PUT O PATCH, DELETE)
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      const datos = await respuesta.json()
      console.log(datos[0])
      setPersonaje(datos[0])
    }
  return (
    <>
      <Container className='text-center my-4'>
        <img src={logo} alt="Logo de los simpsons" className='w-75' />
        <Commet color="#32cd32" size="medium" text="" textColor="" />
        <Frase personaje={personaje}></Frase>
        <Button variant='warning' className='mt-3' onClick={consultarAPI}>Obtener Frase</Button>
      </Container>
    </>
  )
}

export default App
