import React from 'react'

import { Table } from './../common/Table.jsx'

import { useProducts } from '../../hooks/useProducts.jsx'

import './../../styles/components/layouts/Categories.css'

export const Categories = () => {
    const { categories } = useProducts()
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'description', label: 'Descripción' },
        { key: 'created_at', label: 'Fecha de Creación' },
        { key: 'updated_at', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        console.log('Editar', item)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
    }

    return (
        <Table columns={columns} data={categories} onEdit={handleEdit} onDelete={handleDelete}/>
    )
}