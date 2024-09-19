import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import logo from './assets/logosimpson.png'
import Frase from './components/Frase.jsx'
function App() {

  return (
    <>
      <Container className='text-center my-4'>
        <img src={logo} alt="Logo de los simpsons" className='w-75' />
        <Frase></Frase>
        <Button variant='warning' className='mt-3'>Obtener Frase</Button>
      </Container>
    </>
  )
}

export default App
