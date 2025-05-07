import { ProductList } from './../components/ProductList.jsx'

import { products } from './../utils/data.js'

import './../styles/Home.css'

export const Home = ({ AddToCart }) => {  

    return (
        <div className='home'>
            <div className='container'>
                <h1>Bienvenido a eCommerce</h1>
                <ProductList products={products} addToCart={AddToCart}/>
            </div>
        </div>
    )
}