import React from 'react'

import { Main } from './../components/common/Main.jsx'
import { Hero } from './../components/layout/Hero.jsx'
import { Collection } from './../components/layout/Collection.jsx'
import { Slider } from './../components/layout/Slider.jsx'

import { useLicences } from './../hooks/useLicences.jsx'
import { useProducts } from './../hooks/useProducts.jsx'
import { useCart } from './../hooks/useCart.jsx'

import './../styles/pages/Home.css'

export const Home = () => {
    const { licences } = useLicences()
    const { latestReleases } = useProducts()
    const { addToCart } = useCart()

    return (
        <Main className='main-container'>
            <Hero />
            {licences.map((licence, index) => (
                <Collection
                    key={licence.id}
                    licence={licence}
                    nameClass={index % 2 === 0 ? 'collection__cover__par' : 'collection__cover'}
                />
            ))}
            <Slider products={latestReleases} addToCart={addToCart} />
        </Main>
    )
}