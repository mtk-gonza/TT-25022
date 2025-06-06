import React, { useState } from 'react'

import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { RoleForm } from './../common/RoleForm.jsx'

import { useRoles } from '../../hooks/useRoles.jsx'

export const Roles = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [role, setRole] = useState({})
    const { roles } = useRoles()

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'created_at', label: 'Fecha de Creación' },
        { key: 'updated_at', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        setRole(item)
        setIsOpen(true)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
    }

    const handleClosed = () => {
        setIsOpen(false)
        setRole({})
    }

    return (
        <>
            <Table columns={columns} data={roles} onEdit={handleEdit} onDelete={handleDelete}/>
            {isOpen &&
                <Modal isOpen={isOpen} onClosed={handleClosed}>
                    <RoleForm selectedItem={role} onClosed={handleClosed}/>
                </Modal>
            }
        </>
    )
}