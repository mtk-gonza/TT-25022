import React, { useState, useEffect } from 'react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Container } from './../components/Container.jsx'
import { Card } from './../components/Card.jsx'
import { Icon } from './../components/Icon.jsx'
import { Paginator } from './../components/Paginator.jsx'

import { news } from './../utils/news.js'

import { useProducts } from './../hooks/useProducts.jsx'

import './../styles/Shop.css'

export const Shop = () => {
    const { products, categories, licences } = useProducts()
    const [searchParams] = useSearchParams()
    const { category_name, licence_id } = useParams()
    const licenceParam = searchParams.get('licence_id') || licence_id
    const categoryParam = searchParams.get('category_name') || category_name
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(6)
    const [sortOrder, setSortOrder] = useState('az')
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 })
    const [searchTerm, setSearchTerm] = useState('')
    const [filters, setFilters] = useState({
        news: false,
        offers: false,
        specials: false,
        favs: false
    })
    const [finalProducts, setFinalProducts] = useState([])

    const navigate = useNavigate()

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = finalProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(finalProducts.length / productsPerPage)

    const handleFilterChange = (filter) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filter]: !prevFilters[filter]
        }))
    }

    const handleLicenceChange = (e) => {
        const selectedLicenceId = e.target.value
        if (selectedLicenceId) {
            navigate(`/shop/${category_name || ''}?licence_id=${selectedLicenceId}`)
        } else {
            navigate(`/shop/${category_name || ''}`)
        }
    }

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value
        if (selectedCategory) {
            navigate(`/shop/${selectedCategory}`)
        } else {
            navigate('/shop')
        }
    }

    const resetFilters = () => {
        setFilters({
            news: false,
            offers: false,
            specials: false,
            favs: false
        })
        setSearchTerm('')
        setPriceRange({ min: 0, max: 5000 })
        setSortOrder('az')
        navigate('/shop')
    }

    useEffect(() => {
        if (!products || products.length === 0) return

        let result = [...products]

        if (categoryParam) {
            result = result.filter(product => product.category?.name === category_name)
        }

        if (licenceParam) {
            result = result.filter(product => product.licence_id === parseInt(licenceParam, 10))
        }

        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase()
            result = result.filter(product => product.name.toLowerCase().includes(term))
        }

        if (filters.news) {
            result = result.filter(product => news(product.createdAt))
        }

        if (filters.offers) {
            result = result.filter(product => product.discount > 10)
        }

        if (filters.specials) {
            result = result.filter(product => product.special)
        }

        if (filters.favs) {
            result = result.filter(product => product.isFav)
        }

        result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max)

        switch (sortOrder) {
            case 'az':
                result.sort((a, b) => a.name.localeCompare(b.name))
                break
            case 'za':
                result.sort((a, b) => b.name.localeCompare(a.name))
                break
            case 'desc':
                result.sort((a, b) => b.price - a.price)
                break
            case 'asc':
                result.sort((a, b) => a.price - b.price)
                break
            default:
                break
        }

        setFinalProducts(result)
        setCurrentPage(1)
    }, [products, category_name, licenceParam, searchTerm, filters, priceRange, sortOrder])

    return (
        <main className='shop'>
            <Container>
                <aside className='shop__filters filters'>
                    <div className='filters__search'>
                        <label className='filters__title' htmlFor='search'>BUSCAR POR NOMBRE</label>
                        <input
                            type='text'
                            name='search'
                            placeholder='Baby Yoda Blueball'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className='filters__type'>
                        <label className='filters__title' htmlFor='licences'>FILTRAR LICENCIA</label>
                        <select name='licences'
                            onChange={handleLicenceChange}
                            value={licenceParam || ''}
                        >
                            <option value="">TODAS LAS LICENCIAS</option>
                            {licences.map(licence => (
                                <option key={licence.id} value={licence.id}>
                                    {licence.name.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='filters__type'>
                        <label className='filters__title' htmlFor='categories'>FILTRAR CATEGORIA</label>
                        <select
                            name='categories'
                            onChange={handleCategoryChange}
                        >
                            <option value="">TODAS LAS CATEGORIAS</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='filters__order'>
                        <label className='filters__title' htmlFor='orderby'>ORDERNAR POR</label>
                        <select
                            name='orderby'
                            onChange={(e) => setSortOrder(e.target.value)}
                            value={sortOrder}
                        >
                            <option value='az'>A-Z</option>
                            <option value='za'>Z-A</option>
                            <option value='desc'>Mayor precio</option>
                            <option value='asc'>Menor precio</option>
                        </select>
                    </div>

                    <div className='filters__price'>
                        <span className='filters__title'>PRECIO</span>
                        <div>
                            <label htmlFor='min'>MIN</label>
                            <input
                                type='number'
                                name='min'
                                placeholder='0'
                                value={priceRange.min}
                                onChange={(e) => setPriceRange(pr => ({ ...pr, min: Number(e.target.value) }))}
                            />
                            <label htmlFor='max'>- MAX</label>
                            <input
                                type='number'
                                name='max'
                                placeholder='0'
                                value={priceRange.max}
                                onChange={(e) => setPriceRange(pr => ({ ...pr, max: Number(e.target.value) }))}
                            />
                        </div>
                    </div>

                    <div className='filters__checks'>
                        <span className='filters__title'>FILTRAR</span>
                        <div>
                            <input
                                type='checkbox'
                                name='filter'
                                value='news'
                                checked={filters.news}
                                onChange={() => handleFilterChange('news')}
                            />
                            <label htmlFor='news'>NUEVOS</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                name='filter'
                                value='offers'
                                checked={filters.offers}
                                onChange={() => handleFilterChange('offers')}
                            />
                            <label htmlFor='offers'>OFERTAS</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                name='filter'
                                id='specials'
                                value='specials'
                                checked={filters.specials}
                                onChange={() => handleFilterChange('specials')}
                            />
                            <label htmlFor='specials'>EDICIÓN ESPECIAL</label>
                        </div>
                        <div>
                            <input
                                type='checkbox'
                                name='filter'
                                value='favs'
                                checked={filters.favs}
                                onChange={() => handleFilterChange('favs')}
                            />
                            <label htmlFor='favs'>FAVORITOS</label>
                        </div>
                    </div>

                    <button className='filters__btn' onClick={resetFilters} type='button'>
                        LIMPIAR FILTROS
                    </button>
                </aside>

                <section className='shop__content'>
                    {!currentProducts.length ? (
                        <div className="no-results">
                            {products.length === 0 ? (
                                <Icon css='icon' icon={faSpinner} />
                            ) : (
                                <>
                                    <p>No se encontraron productos con los filtros seleccionados.</p>
                                    <button className='filters__btn' onClick={resetFilters}>
                                        Limpiar filtros
                                    </button>
                                </>
                            )}
                        </div>
                    ) : (
                        <>
                            <ul className='shop__items'>
                                {currentProducts.map((product) => (
                                    <li key={product.id}>
                                        <Card product={product}/>
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