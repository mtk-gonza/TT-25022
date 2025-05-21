import React, { useContext } from 'react'
import { Hero } from './../components/Hero.jsx'
import { Container } from './../components/Container.jsx'
import { Collection } from './../components/Collection.jsx'
import { Slider } from './../components/Slider.jsx'

import { useProducts } from './../hooks/useProducts.jsx'
import { CartContext } from './../context/CartContext.jsx'

import './../styles/Home.css'

export const Home = () => {
    const { licences, latestReleases } = useProducts()
    const { addToCart } = useContext(CartContext)
    
    return (
        <>         
            <Hero />
            <main className='main-container'>
                <Container>
                    {licences.map((licence, index) => (
                        <Collection 
                            key={licence.id}
                            licence={licence}
                            nameClass={index % 2 === 0 ? 'collection__cover__par' : 'collection__cover'}
                        />
                    ))}
                </Container>
                <Slider products={latestReleases} addToCart={addToCart}/>
            </main>      
        </>
    )
}