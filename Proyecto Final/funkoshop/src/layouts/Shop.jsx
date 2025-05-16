import React, { useState, useEffect, useContext } from 'react'
import { useSearchParams, useParams, Link } from 'react-router-dom'
import { faSpinner, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { Card } from './../components/Card.jsx'
import { Icon } from './../components/Icon.jsx'
import { Paginator } from './../components/Paginator.jsx'

import { news } from './../utils/news.js'

import { CartContext } from './../context/CartContext.jsx'

import './../styles/Shop.css'

export const Shop = ({ products: allProducts }) => {
    const { addToCart } = useContext(CartContext)
    const [searchParams] = useSearchParams()
    const { licence, licence_id, category, category_id } = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const [products, setProducts] = useState([])
    const [productsPerPage] = useState(6)
    const [filteredProducts, setFilteredProducts] = useState(products)
    const licenceParam = searchParams.get('licence')

    const [filters, setFilters] = useState({
        news: false,
        offers: false,
        specials: false,
        favs: false
    })

    useEffect(() => {
        let filtered = [...allProducts]

        if (category) {
            filtered = filtered.filter(product => product.category.name === category)
        }

        if (licenceParam) {
            filtered = filtered.filter(product => product.licence_id === parseInt(licenceParam, 10))
        }

        setProducts(filtered)
        setCurrentPage(1)
    }, [allProducts, category, licenceParam])

    useEffect(() => {
        let result = [...products]

        if (filters.news) {
            result = result.filter(product => news(product.createdAt))
        }

        if (filters.offers) {
            result = result.filter(product => product.discount > 0)
        }

        if (filters.specials) {
            result = result.filter(product => product.special)
        }

        if (filters.favs) {
            result = result.filter(product => product.isFav)
        }
        setFilteredProducts(result)
    }, [products, filters])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    const handleFilterChange = (filter) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filter]: !prevFilters[filter]
        }))
    }

    return (
        <main id="shop" className="container">
            <aside className="shop__filters filters">
                <div className="filters__search">
                    <label className="filters__title" htmlFor="search">BUSCAR</label>
                    <input type="text" name="search" id="search" placeholder="item o categoría" />
                </div>
                <div className="filters__order">
                    <label className="filters__title" htmlFor="orderby">ORDERNAR POR</label>
                    <select name="orderby" id="orderby">
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                        <option value="desc">Mayor precio</option>
                        <option value="asc">Menor precio</option>
                    </select>
                </div>
                <div className="filters__price">
                    <span className="filters__title" >PRECIO</span>
                    <div>
                        <label htmlFor="min">MIN</label>
                        <input type="text" name="min" id="min" placeholder="0" />
                        <label htmlFor="max">- MAX</label>
                        <input type="text" name="max" id="max" placeholder="0" />
                    </div>
                </div>
                <div className="filters__checks">
                    <span className="filters__title" htmlFor="filter">FILTRAR</span>
                    <div>
                        <input
                            type="checkbox"
                            name="filter"
                            id="news"
                            value="news"
                            checked={filters.news}
                            onChange={() => handleFilterChange('news')}
                        />
                        <label htmlFor="news">NUEVOS</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="filter"
                            id="offers"
                            value="offers"
                            checked={filters.offers}
                            onChange={() => handleFilterChange('offers')}
                        />
                        <label htmlFor="offers">OFERTAS</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="filter"
                            id="specials"
                            value="specials"
                            checked={filters.specials}
                            onChange={() => handleFilterChange('specials')}
                        />
                        <label htmlFor="specials">EDICIÓN ESPECIAL</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="filter"
                            id="favs"
                            value="favs"
                            checked={filters.favs}
                            onChange={() => handleFilterChange('favs')}
                        />
                        <label htmlFor="favs">FAVORITOS</label>
                    </div>
                </div>
            </aside>
            <section className="shop__content">
                {!currentProducts.length ? (
                    <div className="container">
                        <Icon css='icon' icon={faSpinner} />
                    </div>
                ) : (
                    <>
                        <ul className="shop__items">
                            {currentProducts.map((product) => (
                                <li key={product.id}>
                                    <Card product={product} addToCart={addToCart}></Card>
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
        </main>
    )
}