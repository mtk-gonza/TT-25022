import React, { useState } from 'react'

import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { UserForm } from '../common/UserForm.jsx'

import { useUsers } from '../../hooks/useUsers.jsx'
import { deleteUser } from './../../services/userService.js'

import './../../styles/components/layouts/Licences.css'

export const Users= () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({})
    const { users, getUsers } = useUsers()
    
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

    const handleDelete = async (item) => {
        console.log('Eliminar', item)
        const confirm = window.confirm(`¿Estas seguro de eliminar al usuario: ${item.email}`)
        if (confirm){
            try {
                const response = await deleteUser(item.id)
                getUsers()
                if (response) alert('Usuario eliminado exitosamente')
            } catch (err) {
                console.error(err)
            }
        }
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