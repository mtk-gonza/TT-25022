import { Header } from './components/Header.jsx'
import { Nav } from './components/Nav.jsx'
import { Main } from './components/Main.jsx'
import { Gallery } from './components/Gallery.jsx'
import { Footer } from './components/Footer.jsx'
import { Tarjeta } from './components/Tarjeta.jsx'
import './Index.css'

export const App = () => {
    const promociones = [
        {
            id: 1,
            titulo: '¡Descuento de Verano!',
            descripcion: 'Aprovecha hasta un 50% de descuento en toda la tienda.',
            imagenUrl: 'https://placehold.co/200x200',
            enlance: '/descuentos-verano',
            textBTN: 'Ver más'
        },
        {
            id: 2,
            titulo: 'Envío Gratis',
            descripcion: 'Recibe tu pedido sin costo de envío en compras mayores a $50.',
            imagenUrl: 'https://placehold.co/200x200',
            enlance: '/envio-gratis',
            textBTN: 'Ver menos'
        },
        {
            id: 3,
            titulo: 'Compra 1 y Llévate 2',
            descripcion: 'LLévate un producto gratis al comprar uno de nuestra selección.',
            imagenUrl: 'https://placehold.co/200x200',
            enlance: '/compra1llevate2',
            textBTN: 'Detalles'
        }
    ]

    const handlerClick = (e) => {
        e.target.style.backgroundColor = 'red'
        console.log('hice click')
    }

    return (
        <>
            <Header />
            <Nav />
            <button onClick={handlerClick} >Ejemplo de Guia</button>
            <Main />
            <Gallery />
            <Footer />
        </>
    )
}