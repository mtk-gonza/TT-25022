import React, { useState } from 'react'

import { Button } from './Button.jsx'

import { useProducts } from './../hooks/useProducts.jsx'

import './../styles/ProductForm.css'

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
    createdAt: '',
    updatedAt: ''
}

export const ProductForm = ({ selectedItem = {}, onSubmit }) => {
    const [product, setProduct] = useState(initialProductState);
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
        <form onSubmit={handleSubmit} className='ProductForm'>
            <div>
                <label className='ProductForm__label-name'>Nombre:</label>
                <input type='text' name='name' value={product.name} onChange={handleChange} required />
                {errors.name && <p className='ProductForm__error'>{errors.name}</p>}
            </div>
            <div>
                <label className='ProductForm__label-sku'>N° De Serie:</label>
                <input type='text' name='sku' value={product.sku} onChange={handleChange} required />
                {errors.sku && <p className='ProductForm__error'>{errors.sku}</p>}
            </div>
            <div>
                <label className='ProductForm__label-description'>N° De Serie:</label>
                <input type='text' name='description' value={product.description} onChange={handleChange} required />
                {errors.description && <p className='ProductForm__error'>{errors.description}</p>}
            </div>
            <div>
                <label className='ProductForm__label-price'>Precio:</label>
                <input type='number' name='price' value={product.price} onChange={handleChange} required />
                {errors.price && <p className='ProductForm__error'>{errors.price}</p>}
            </div>  
            <div>
                <label className='ProductForm__label-stock'>Stock:</label>
                <input type='number' name='stock' value={product.stock} onChange={handleChange} required />
                {errors.stock && <p className='ProductForm__error'>{errors.stock}</p>}
            </div>  
            <div>
                <label className='ProductForm__label-discount'>Descuento:</label>
                <input type='number' name='discount' value={product.discount} onChange={handleChange} required />
                {errors.discount && <p className='ProductForm__error'>{errors.discount}</p>}
            </div>
            <div>
                <label className='ProductForm__label-dues'>Cuotas:</label>
                <input type='number' name='dues' value={product.dues} onChange={handleChange} required />
                {errors.dues && <p className='ProductForm__error'>{errors.dues}</p>}
            </div>
            <div>
                <label className='ProductForm__label-special'>Especial:</label>
                <select name='special' value={product.special} onChange={handleCategoryChange} required >
                    <option value=''>Seleccione si es Especial</option>
                    <option value={true}>SI</option>
                    <option value={false}>NO</option>
                </select>
                {errors.special && <p className='ProductForm__error'>{errors.special}</p>}
            </div>  
            <div>
                <label className='ProductForm__label-image_front'>Nombre del archivo FRONT</label>
                <input type='text' name='image_front' value={product.image_front} onChange={handleChange} required />
                {errors.image_front && <p className='ProductForm__error'>{errors.image_front}</p>}
            </div>
            <div>
                <label className='ProductForm__label-image_back'>Nombre del archivo BACK</label>
                <input type='text' name='image_back' value={product.description} onChange={handleChange} required />
                {errors.image_back && <p className='ProductForm__error'>{errors.image_back}</p>}
            </div> 
            <div>
                <label className='ProductForm__label-licence'>Licencia:</label>
                <select name='licence_id' value={product.licence_id || ''} onChange={handleLicenceChange} required >
                    <option value=''>Seleccione una categoría</option>
                    {licences.map((licence) => (
                        <option key={licence.id} value={licence.id}>
                            {licence.name}
                        </option>
                    ))}
                </select>
                {errors.licence_id && <p className='ProductForm__error'>{errors.licence_id}</p>}
            </div> 
            <div>
                <label className='ProductForm__label-category'>Categoría:</label>
                <select name='category_id' value={product.category_id || ''} onChange={handleCategoryChange} required >
                    <option value=''>Seleccione una categoría</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errors.category_id && <p className='ProductForm__error'>{errors.category_id}</p>}
            </div>
            <Button type='submit' className='btn_submit__edit_item'>
                {product.id ? 'Actualizar' : 'Guardar'}
            </Button>
        </form>
    )
}