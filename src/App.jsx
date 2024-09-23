import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import logo from './assets/logosimpson.png'
import Frase from './components/Frase.jsx'
import { useEffect, useState } from 'react';
import { Commet } from 'react-loading-indicators';
function App() {
    const [personaje, setPersonaje] = useState({})
    const [mostrarLoading, setMostrarLoading] = useState(true)
    useEffect(()=>{
      consultarAPI();
    }, [])

    const consultarAPI = async()=>{
      try {
        setMostrarLoading(true)
        //FetchAPI
        //solicitud GET (POST,PUT O PATCH, DELETE)
        const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        const datos = await respuesta.json()
        console.log(datos[0])
        setPersonaje(datos[0])
        setMostrarLoading(false)
      } catch (error) {
        console.error(error)
        alert('Error al cargar')
     
      } finally {
        setMostrarLoading(false)
      }

    }
  return (
    <>
      <Container className='text-center my-4'>
        <img src={logo} alt="Logo de los simpsons" className='w-75' />
        {
          (mostrarLoading === true)?( 
          <div>
            <Commet color="#000000" size="medium" text="" textColor="" />
          </div>
          ):(
              <Frase personaje={personaje}></Frase>
            )
        }
        <Button variant='warning' className='mt-3' onClick={consultarAPI}>Obtener Frase</Button>
      </Container>
    </>
  )
}

export default App
