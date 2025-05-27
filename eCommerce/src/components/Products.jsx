import React, { useState } from 'react'
import { Table } from './Table.jsx'
import { useProducts } from '../hooks/useProducts.jsx'

import './../styles/Products.css'

export const Products = () => {
    const { products } = useProducts()

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'sku', label: 'Código' },
        { key: 'description', label: 'Descripción' },
        { key: 'price', label: 'Precio' },
        { key: 'stock', label: 'Stock' },
        { key: 'discount', label: 'Descuento' },
        { key: 'dues', label: 'Cuotas' },
        { key: 'special', label: 'Especial' }
    ]

    const handleEdit = (item) => {
        console.log('Editar', item)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
    }

    return (
        <Table 
            title='Productos' 
            data={products} 
            columns={columns} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
        />
    )
}