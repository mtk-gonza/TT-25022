import React from 'react'
import { Hero } from './../components/Hero.jsx'
import { Collection } from './../components/Collection.jsx'
import { Slider } from './../components/Slider.jsx'

import './../styles/Home.css'

export const Home = ({ products, licences }) => {

    const latestReleases = products.filter(product => {
        const createdAt = new Date(product.createdAt)
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        return createdAt > thirtyDaysAgo
    })

    return (
        <>         
            <Hero />
            <main className="main-container">
                <div className="container">
                    {licences.map((licence, index) => (
                        <Collection 
                            key={licence.id}
                            licence={licence}
                            nameClass={index % 2 === 0 ? 'collection__cover__par' : 'collection__cover'}
                        />
                    ))}
                </div>
                <Slider products={latestReleases} />
            </main>      
        </>
    )
}