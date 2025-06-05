import React, { useState, useRef, useEffect } from 'react'

import { Button } from './../common/Button.jsx'

import { createProduct, updateProduct } from './../../services/productService.js'

import { useProducts } from '../../hooks/useProducts.jsx'

const initialProductState = {
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
    category_id: 0
}

export const ProductForm = ({ selectedItem = {}, onClosed }) => {
    const [product, setProduct] = useState(initialProductState)
    const isInitialLoad = useRef(true)
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
        const selectedLicence = licences.find(lic => lic.id === e.target.value);
        setProduct((prev) => ({
            ...prev,
            licence_id: selectedLicence.id,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response
            if (product.id) {
                response = await updateProduct(product)
            } else {
                response = await createProduct(product)
            }
            if (response) {
                alert(product.id ? 'Producto actualizado exitosamente' : 'Producto creado exitosamente')
                setProduct(initialProductState)
                isInitialLoad.current = true
                onClosed()
            }
        } catch (err) {
            console.error(err)
            alert('Hubo un error al procesar el producto. Inténtalo más tarde.')
        }
    }

    useEffect(() => {
            if (isInitialLoad.current) {
                if (selectedItem && selectedItem.id) {
                    setProduct(selectedItem)
                } else {
                    setProduct(initialProductState)
                }
                isInitialLoad.current = false
            }
    }, [selectedItem])

    return (
        <div className='product-form'>
            <div className='form__header'>
                <h2 className='form__title'>
                    {product.id ? 'Actualizar Producto' : 'Agregar Producto'}
                </h2>
            </div>
            <form className='form__content' onSubmit={handleSubmit} >
                <div className='form__box--grid'>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input' type='text' name='name' value={product.name} onChange={handleChange} required />
                    {errors.name && <p className='form__error'>{errors.name}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>N° De Serie:</label>
                    <input className='form__input' type='text' name='sku' value={product.sku} onChange={handleChange} required />
                    {errors.sku && <p className='form__error'>{errors.sku}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Descripcion:</label>
                    <input className='form__input' type='text' name='description' value={product.description} onChange={handleChange} required />
                    {errors.description && <p className='form__error'>{errors.description}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Precio:</label>
                    <input className='form__input' type='number' name='price' value={product.price} onChange={handleChange} required />
                    {errors.price && <p className='form__error'>{errors.price}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Stock:</label>
                    <input className='form__input' type='number' name='stock' value={product.stock} onChange={handleChange} required />
                    {errors.stock && <p className='form__error'>{errors.stock}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Descuento:</label>
                    <input className='form__input' type='number' name='discount' value={product.discount} onChange={handleChange} required />
                    {errors.discount && <p className='form__error'>{errors.discount}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Cuotas:</label>
                    <input className='form__input' type='number' name='dues' value={product.dues} onChange={handleChange} required />
                    {errors.dues && <p className='form__error'>{errors.dues}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Especial:</label>
                    <select className='form__select' name='special' value={product.special} onChange={handleCategoryChange} required >
                        <option value=''>Seleccione si es Especial</option>
                        <option value={true}>SI</option>
                        <option value={false}>NO</option>
                    </select>
                    {errors.special && <p className='form__error'>{errors.special}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>URL FRONT</label>
                    <input className='form__input' type='text' name='image_front' value={product.image_front} onChange={handleChange} required />
                    {errors.image_front && <p className='form__error'>{errors.image_front}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>URL BACK</label>
                    <input className='form__input' type='text' name='image_back' value={product.description} onChange={handleChange} required />
                    {errors.image_back && <p className='form__error'>{errors.image_back}</p>}
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
                    {errors.licence_id && <p className='form__error'>{errors.licence_id}</p>}
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
                    {errors.category_id && <p className='form__error'>{errors.category_id}</p>}
                </div>
                <div className='form__actions'>
                    <Button type='submit' className='form__btn-submit btn'>
                        {product.id ? 'Actualizar' : 'Guardar'}
                    </Button>
                    <Button className='form__btn-cancel btn btn--primary' onClick={onClosed}>
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    )
}