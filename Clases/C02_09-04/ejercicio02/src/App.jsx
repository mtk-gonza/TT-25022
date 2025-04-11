import { useState } from 'react'
import { Button } from './components/Button/Button.jsx'
import { ListOrdered } from './components/ListOrdered/ListOrdered.jsx'
import { Card } from './components/Card/Card.jsx'

export const App = () => {
    const [showList, setShowList] = useState(false)
    const [showCard, setShowCard] = useState(false)

    const productos = ['Manzanas', 'Peras', 'Naranjas'];

    const handleList = () => {
        setShowList(!showList)
    }

    const handleCard = () => {
        setShowCard(!showCard)
    }

    return (
        <div className='page'>
            <header>
                <h1>Ejercicio 02</h1>
            </header>
            <main>
                <div className='container'>
                    <Button onClick={handleList}>
                        {showList ? 'Ocultar Lista 🔼' : 'Mostrar Lista 🔽'}
                    </Button>
                    {showList && 
                        <ListOrdered items={productos}></ListOrdered>
                    }
                    <Button onClick={handleCard}>
                        {showCard ? 'Ocultar Tarjeta 🔼' : 'Mostrar Tarjeta 🔽'}
                    </Button>
                    {showCard &&
                        <Card
                            title='Oferta especial'
                            description='20% de descuento en todos los productos'
                            btnTxt='Ver más' 
                        />
                    }
                </div>
            </main>
            <footer>
                by Gonzalo
            </footer>
        </div>
    )
}