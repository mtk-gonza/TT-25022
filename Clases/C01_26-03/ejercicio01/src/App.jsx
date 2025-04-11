import { useState } from 'react'
import { Button } from './components/Button.jsx'

export const App = () => {
  const [count, setCount] = useState(0)
  const [bandera, setBandera] = useState(false)

  const handleCount = () => {
    setCount((count) => count + 1)
  }

  const handleBandera = () => {
    setBandera(!bandera)
  }

  return (
    <>
      <h1>Clase 01</h1>
      <div className='card'>
        <Button onClick={handleCount}>
          count is {count}
        </Button>        
        <Button onClick={handleBandera}>
          {bandera ? 'Ocultar saludo' : 'Mostrar saludo'}
        </Button>        
      </div>   
      {bandera ? <p>Hola mundo</p> : ''}   
    </>
  )
}