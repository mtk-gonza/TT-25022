import { Boton } from './Boton.jsx'

export const Tarjeta = ({titulo, img, descripcion, botonTexto, botonColor}) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <img src={img} alt={'imagen ' + titulo} />
            <Boton color={botonColor} texto={botonTexto}/>
        </div>
    )
}