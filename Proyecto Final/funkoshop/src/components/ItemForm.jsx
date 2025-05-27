import React, { useState, useEffect } from 'react'

import { Button } from './Button.jsx'

import './../styles/ItemForm.css'

const initialItemState = {
    id: null,
    sku: "",
    name: "",
    category: null,
    description: "",
    current_stock: 0,
};

export const ItemForm = ({ selectedItem = {}, onSave, categories }) => {
    const [item, setItem] = useState(initialItemState);

    useEffect(() => {
        selectedItem ? setItem({...selectedItem}) : setItem(initialItemState);
    }, [selectedItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = categories.find(cat => cat.id === parseInt(e.target.value));
        setItem((prev) => ({
            ...prev,
            category: selectedCategory,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(item);
    };

    return (
        <form onSubmit={handleSubmit} className='form__edit_item'>
            <div>
                <label className='label_sku__edit_item'>N° De Serie:</label>
                <input
                    type='text'
                    name='sku'
                    value={item.sku}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className='label_name__edit_item'>Nombre:</label>
                <input
                    type='text'
                    name='name'
                    value={item.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className='label_category__edit_item'>Categoría:</label>
                <select
                    name='category'
                    value={item.category?.id || ''}
                    onChange={handleCategoryChange}
                    required
                >
                    <option value=''>Seleccione una categoría</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className='label_description__edit_item'>Descripción:</label>
                <input
                    type='text'
                    name='description'
                    value={item.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className='label_stock__edit_item'>Stock:</label>
                <input
                    type='number'
                    name='current_stock'
                    value={item.current_stock}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type='submit' className='btn_submit__edit_item'>
                {item.id ? 'Actualizar' : 'Guardar'}
            </Button>
        </form>
    );
};