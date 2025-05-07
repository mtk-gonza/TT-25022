import { Link } from 'react-router-dom'
import { API_URL } from './../../services/apiClient.js';

import './../styles/Card.css'

export const Card = ({product}) => { 
    const currentDate = new Date();            
    const createdAt = new Date(product.createdAt);
    const differenceInMilliseconds = currentDate - createdAt;          
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInADay);
    const isNew = differenceInDays < 7;    
    if (!product){
        return <div>Cargando...</div>;
    }

    return (
        <article className="card-item">
            <Link className="card-item__link" to={`/shop/${product.category.name}/item/${product.id}`}>
                <picture className="card-item__cover">
                    {isNew && <span className="card-item__tag">Nuevo</span>}                    
                    <img className="card-item__img--front slider" src={`${API_URL}/uploads/${product.images[0].path}`} alt={`Figura coleccionable Funko de un ${product.name}`}/>
                    <img className="card-item__img--back slider" src={`${API_URL}/uploads/${product.images[1].path}`} alt={`Figura coleccionable Funko de un ${product.name} en caja`}/>
                </picture>
                <div className="card-item__content">
                    <p className="card-item__licence">{product.licence.name}</p>
                    <h4 className="card-item__name">{product.name}</h4>
                    <p className="card-item__price">${product.price}.-</p>
                    <p className="card-item__promo">{product.dues} CUOTAS SIN INTERÉS</p>
                </div>
            </Link>
        </article>
    )
}