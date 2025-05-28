import React from 'react'
import { useParams } from 'react-router-dom'

import { Main } from './../components/Main.jsx'
import { ProductDetail } from './../components/ProductDetail.jsx'
import { Loading } from './../components/Loading.jsx'
import { Slider } from './../components/Slider.jsx'

import { useProducts } from './../hooks/useProducts.jsx'

import './../styles/Detail.css'

export const Detail = () => {    
    const { product_id } = useParams()
    const { products } = useProducts()

    const product = products.find(producto => producto.id == product_id)
    const productsColection = products.filter(item => item.licence_id == product.licence_id & item.id != product.id)

    if (!product) {
        return (
            <Loading/>                
        )
    }

    return (
        <Main className='detail'>
            <ProductDetail product={product}/>
            {productsColection.length > 1 &&  <Slider products={productsColection} title='COLECCIÓN'/>}            
        </Main>
    )
}