import { Link } from 'react-router-dom';
import { API_URL } from './../../services/apiClient.js';

import './../styles/Collection.css'

export const Collection = ({licence, nameClass}) => {         
    return (
        <section className="collection">
            <article className="collection__content">
                <h3 className="collection__title">{licence.name}</h3>
                <p className="collection__text">{licence.description}</p>
                <Link className="collection__link" to={`/shop/funkos/${licence.id}`} >VER COLECCIÓN</Link>                              
            </article>
            <picture className={nameClass}>
                <img src={`${API_URL}/uploads/${licence.images[0].path}`} alt={`Figura de ${licence.name}`}/>
            </picture>
        </section>  
    )
}