import { ProductList } from './../components/ProductList.jsx'
import { CartList } from './../components/CartList.jsx'

import { products } from './../utils/data.js'

import './../styles/Home.css'

export const Home = ({cart, handlerAddToCart, handlerClearCart}) => {  

    return (
        <div className='home'>
            <div className='container'>
                <h1>Bienvenido a eCommerce</h1>
                <ProductList products={products} addToCart={handlerAddToCart}/>
                <CartList cartItems={cart} clearCart={handlerClearCart}/>
            </div>
        </div>
    )
}