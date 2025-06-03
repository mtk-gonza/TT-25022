import React, { useState } from 'react'

import { Button } from './../common/Button.jsx'

import { useProducts } from '../../hooks/useProducts.jsx'

import './../../styles/components/layouts/ProductForm.css'

const initialProductState = {
    id: null,
    name: '',
    sku: '',
    description: '',
    price: 0,
    stock: 0,
    discount: 0,
    dues: 0,
    special: false,
    image_front: '',
    image_back: '',
    licence_id: 0,
    category_id: 0,
    created_at: new Date(Date.now()).toISOString(),
    updated_at: ''
}

export const ProductForm = ({ selectedItem = {}, onSubmit, onClosed }) => {
    const [product, setProduct] = useState(initialProductState)
    const [errors, setErrors] = useState({})
    const { categories, licences } = useProducts()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCategoryChange = (e) => {
        const selectedCategory = categories.find(cat => cat.id === parseInt(e.target.value));
        setProduct((prev) => ({
            ...prev,
            category_id: selectedCategory.id,
        }))
    }

    const handleLicenceChange = (e) => {
        const selectedLicence = licences.find(lic => lic.id === parseInt(e.target.value));
        setProduct((prev) => ({
            ...prev,
            licence_id: selectedLicence.id,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(product)
        setProduct(initialProductState)
    }

    return (
        <div className='product-form'>
            <div className='product-form__header'>
                <h2 className='product-form__title'>
                    {product.id ? 'Actualizar Producto' : 'Agregar Producto'}
                </h2>
            </div>
            <form className='product-form__content' onSubmit={handleSubmit} >
                <div className='form__box--grid'>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input' type='text' name='name' value={product.name} onChange={handleChange} required />
                    {errors.name && <p className='product-form__error'>{errors.name}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>N° De Serie:</label>
                    <input className='form__input' type='text' name='sku' value={product.sku} onChange={handleChange} required />
                    {errors.sku && <p className='product-form__error'>{errors.sku}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Descripcion:</label>
                    <input className='form__input' type='text' name='description' value={product.description} onChange={handleChange} required />
                    {errors.description && <p className='product-form__error'>{errors.description}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Precio:</label>
                    <input className='form__input' type='number' name='price' value={product.price} onChange={handleChange} required />
                    {errors.price && <p className='product-form__error'>{errors.price}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Stock:</label>
                    <input className='form__input' type='number' name='stock' value={product.stock} onChange={handleChange} required />
                    {errors.stock && <p className='product-form__error'>{errors.stock}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Descuento:</label>
                    <input className='form__input' type='number' name='discount' value={product.discount} onChange={handleChange} required />
                    {errors.discount && <p className='product-form__error'>{errors.discount}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Cuotas:</label>
                    <input className='form__input' type='number' name='dues' value={product.dues} onChange={handleChange} required />
                    {errors.dues && <p className='product-form__error'>{errors.dues}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Especial:</label>
                    <select className='form__select' name='special' value={product.special} onChange={handleCategoryChange} required >
                        <option value=''>Seleccione si es Especial</option>
                        <option value={true}>SI</option>
                        <option value={false}>NO</option>
                    </select>
                    {errors.special && <p className='product-form__error'>{errors.special}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>URL FRONT</label>
                    <input className='form__input' type='text' name='image_front' value={product.image_front} onChange={handleChange} required />
                    {errors.image_front && <p className='product-form__error'>{errors.image_front}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>URL BACK</label>
                    <input className='form__input' type='text' name='image_back' value={product.description} onChange={handleChange} required />
                    {errors.image_back && <p className='product-form__error'>{errors.image_back}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Licencia:</label>
                    <select className='form__select' name='licence_id' value={product.licence_id || ''} onChange={handleLicenceChange} required >
                        <option value=''>Seleccione una Licencia</option>
                        {licences.map((licence) => (
                            <option key={licence.id} value={licence.id}>
                                {licence.name}
                            </option>
                        ))}
                    </select>
                    {errors.licence_id && <p className='product-form__error'>{errors.licence_id}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Categoría:</label>
                    <select className='form__select' name='category_id' value={product.category_id || ''} onChange={handleCategoryChange} required >
                        <option value=''>Seleccione una Categoría</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && <p className='product-form__error'>{errors.category_id}</p>}
                </div>
                <div className='product-form__actions'>
                    <Button type='submit' className='product-form__btn-submit btn'>
                        {product.id ? 'Actualizar' : 'Guardar'}
                    </Button>
                    <Button className='product-form__btn-cancel btn btn--primary' onClick={onClosed}>
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    )
}