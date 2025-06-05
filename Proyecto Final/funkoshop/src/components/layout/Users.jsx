import React, { useState } from 'react'

import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { UserForm } from '../common/UserForm.jsx'

import { useUsers } from '../../hooks/userUsers.jsx'

import './../../styles/components/layouts/Licences.css'

export const Users= () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({})
    const { users } = useUsers()
    
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'last_name', label: 'Apellido' },
        { key: 'created_at', label: 'Fecha de Creación' },
        { key: 'updated_at', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        setUser(item)
        setIsOpen(true)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
    }

    const handleClosed = () => {
        setIsOpen(false)
        setUser({})
    }

    return (
        <>
            <Table columns={columns} data={users} onEdit={handleEdit} onDelete={handleDelete}/>
            {isOpen &&
                <Modal isOpen={isOpen} onClosed={handleClosed}>
                    <UserForm selectedItem={user} onClosed={handleClosed}/>
                </Modal>
            }
        </>
    )
}