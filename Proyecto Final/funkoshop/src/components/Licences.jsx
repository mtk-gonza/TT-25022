import React from 'react'
import { Table } from './Table.jsx'
import { useProducts } from './../hooks/useProducts.jsx'

import './../styles/Licences.css'

export const Licences = () => {
    const { licences } = useProducts()
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'description', label: 'Descripción' },
        { key: 'image', label: 'Imagen Path' },
        { key: 'createdAt', label: 'Fecha de Creación' },
        { key: 'updatedAt', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        console.log("Editar", item)
    }

    const handleDelete = (item) => {
        console.log("Eliminar", item)
    }

    return (
        <Table title='Licencias' data={licences} columns={columns} onEdit={handleEdit} onDelete={handleDelete}/>
    )
}