import React from 'react'

import { Table } from './Table.jsx'
import { useUsers } from './../hooks/userUsers.jsx'

import './../styles/Licences.css'

export const Users= () => {
    const { users } = useUsers()
    
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'lastName', label: 'Apellido' },
        { key: 'rol_id', label: 'Rol' }
    ]

    const handleEdit = (item) => {
        console.log('Editar', item)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
    }

    return (
        <Table columns={columns} data={users} onEdit={handleEdit} onDelete={handleDelete}/>
    )
}