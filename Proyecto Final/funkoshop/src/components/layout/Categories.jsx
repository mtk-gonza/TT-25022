import React, { useState } from 'react'

import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { CategoryForm } from './../layout/CategoryForm.jsx'

import { useProducts } from '../../hooks/useProducts.jsx'

export const Categories = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState({})
    const { categories } = useProducts()

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'created_at', label: 'Fecha de Creación' },
        { key: 'updated_at', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        setCategory(item)
        setIsOpen(true)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
    }

    const handleClosed = () => {
        setIsOpen(false)
        setCategory({})
    }

    return (
        <>
            <Table columns={columns} data={categories} onEdit={handleEdit} onDelete={handleDelete}/>
            {isOpen &&
                <Modal isOpen={isOpen} onClosed={handleClosed}>
                    <CategoryForm selectedItem={category} onClosed={handleClosed}/>
                </Modal>
            }
        </>
    )
}