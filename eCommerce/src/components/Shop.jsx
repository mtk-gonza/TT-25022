import React, { useState, useEffect } from 'react'

import { Container } from './../components/Container.jsx'
import { Loading } from './Loading.jsx'
import { ProductCard } from './/ProductCard.jsx'
import { Paginator } from './../components/Paginator.jsx'

import './../styles/Shop.css'

export const Shop = ({products}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(8)

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(products.length / productsPerPage)

    useEffect(() => {
        setCurrentPage(1)
    }, [products])

    return (
        <main className='shop'>
            <Container>
                <section className='shop__content'>
                    {!currentProducts.length ? (
                        <div className="no-results">
                            {products.length === 0 ? (
                                <Loading />
                            ) : (
                                <>
                                    <p>No se encontraron productos.</p>
                                </>
                            )}
                        </div>
                    ) : (
                        <>
                            <ul className='shop__items'>
                                {currentProducts.map((product) => (
                                    <li key={product.id}>
                                        <ProductCard product={product}/>
                                    </li>
                                ))}
                            </ul>
                            {totalPages > 1 && (
                                <Paginator
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={(newPage) => setCurrentPage(newPage)}
                                />
                            )}
                        </>
                    )}
                </section>
            </Container>
        </main>
    )
}