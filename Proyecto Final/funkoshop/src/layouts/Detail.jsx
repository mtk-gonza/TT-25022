import { useParams } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './../../components/index.js';

import './../styles/Detail.css'

export const Detail = ({products}) => {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id));

    if (!product) {
        return (
            <div className="container">
                <Icon css='icon' icon={faSpinner} />
            </div>
        )
    }

    return (
        <main className="container">            
            <section className="item">
                <picture className="item__img card-item__cover">
                    <img className="card-item__img--front" src={`/img/${product.image_front}`} alt={`Figura coleccionable Funko de un ${product.name}`} />
                    <img className="card-item__img--back" src={`/img/${product.image_back}`} alt={`Figura coleccionable Funko de un ${product.name} en caja`}/>
                </picture>
                <article className="item__info">
                    <p className="item__licence">{ product.licence.name }</p>
                    <h3 className="item__name">{ product.name }</h3>
                    <p className="item__description">{ product.description }</p>
                    <p className="item__price">{product.price}</p>
                    <form className="item__cart">
                        <button id="subtract" className="item__quantity" type="button">-</button>
                        <input id="quantity" className="item__input" type="text" name="quantity" placeholder="0" />
                        <button id="add" className="item__quantity" type="button">+</button>
                        <button className="item__submit btn btn--primary btn--medium" type="submit">Agregar al carrito</button>
                    </form>
                    <p className="item__promo"><a href="">Ver métodos de pago</a> - {product.dues} CUOTAS SIN INTERÉS</p>
                </article>
            </section>
        </main>
    )
}