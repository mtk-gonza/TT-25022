import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { faSpinner, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Card } from './../components/Card.jsx'
import { Icon } from './../components/Icon.jsx'
import { news } from './../utils/news.js'
import './../styles/Shop.css'

export const Shop = ({ products, addToCart }) => {
    const { category, licence_id } = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(6)
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [filters, setFilters] = useState({
        news: false,
        offers: false,
        specials: false,
        favs: false
    })
    let filtered = products;

    const setProducts = () => {
        if (category) {
            filtered = products.filter(
                product => licence_id ? product.category.name === category & product.licence_id === parseInt(licence_id) :
                    product.category.name === category
            )
        }
        if (filters.news) {            
            filtered = filtered.filter(product => news(product.createdAt))
        }
        if (filters.offers) {
            filtered = filtered.filter(product => product.discount > 10)
        }
        if (filters.specials) {            
            filtered = filtered.filter(product => product.special == 1)
        }
        if (filters.favs) {
            filtered = filtered.filter(product => product)
        }        
        setFilteredProducts(filtered)
    }

    useEffect(() => {
        setProducts()
    }, [category, filters, licence_id])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
        pageNumbers.push(i)
    }

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
                {!currentProducts.length ? 
                    <div className="container">
                        <Icon css='icon' icon={faSpinner} />
                    </div>
                    :
                    <ul className="shop__items">                
                        {currentProducts.map((product) => (
                            <li key={product.id}>
                                <Card product={product} addToCart={addToCart}></Card>
                            </li>
                        ))}
                    </ul>
                }                
                <div className="pagination">
                    {filteredProducts.length > 6 &&
                        <>
                            <Link
                                to={`#${currentPage > 1 ? currentPage - 1 : 1}`}
                                className={`pagination__link ${currentPage === 1 ? 'disabled' : 'pagination__link--selected'}`}
                                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                            >
                                <Icon css='icon' icon={faChevronLeft} /> 
                            </Link>
                            {pageNumbers.map((number) => (
                                <Link
                                    key={number}
                                    to={`#${number}`}
                                    className={`pagination__link ${currentPage === number ? 'pagination__link--selected' : ''}`}
                                    onClick={() => setCurrentPage(number)}
                                >
                                    {number}
                                </Link>
                            ))}
                            <Link
                                to={`#${currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length}`}
                                className={`pagination__link ${currentPage === pageNumbers.length ? 'disabled' : 'pagination__link--selected'}`}
                                onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
                            >
                                <Icon css='icon' icon={faChevronRight} />                                
                            </Link>
                        </>
                    }
                </div>
            </section>
        </main>
    )
}