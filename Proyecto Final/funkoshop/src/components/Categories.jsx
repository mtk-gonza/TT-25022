import React from 'react'

import { Table } from './Table.jsx'

import { useProducts } from '../hooks/useProducts.jsx'

import './../styles/Categories.css'

export const Categories = () => {
    const { categories } = useProducts()
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'description', label: 'Descripción' },
        { key: 'createdAt', label: 'Fecha de Creación' },
        { key: 'updatedAt', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        console.log('Editar', item)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
    }

    return (
        <Table title='Categorias' data={categories} columns={columns} onEdit={handleEdit} onDelete={handleDelete}/>
    )
}