import React from 'react'

import { Table } from './../common/Table.jsx'

import { useUsers } from '../../hooks/userUsers.jsx'

export const Roles = () => {
    const { roles } = useUsers()
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
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
        <Table columns={columns} data={roles} onEdit={handleEdit} onDelete={handleDelete}/>
    )
}