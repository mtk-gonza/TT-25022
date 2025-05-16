import React, { useState } from 'react'
import { Table } from './Table.jsx'
import { useProducts } from '../hooks/useProducts.jsx'

import './../styles/Products.css'

export const Products = () => {
    const { products } = useProducts()
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5 
    const totalPages = Math.ceil(products.length / itemsPerPage)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentData = products.slice(indexOfFirstItem, indexOfLastItem)

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

    const handleAdd = () => {
        console.log('Agregar nuevo producto')
    }

    return (
        <Table 
            title='Productos' 
            data={currentData} 
            columns={columns} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
            onAdd={handleAdd}
            pagination={{
                currentPage,
                totalPages,
                onPageChange: (newPage) => setCurrentPage(newPage)
            }}
        />
    )
}