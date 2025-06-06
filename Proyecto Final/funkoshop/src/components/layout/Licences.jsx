import React, { useState } from 'react'

import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { LicenceForm } from '../common/LicenceForm.jsx'

import { useLicences } from '../../hooks/useLicences.jsx'

import './../../styles/components/layouts/Licences.css'

export const Licences = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [licence, setLicene] = useState({})
    const { licences } = useLicences()

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'created_at', label: 'Fecha de Creación' },
        { key: 'updated_at', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        console.log("Editar", item)
        setLicene(item)
        setIsOpen(true)
    }

    const handleDelete = (item) => {
        console.log("Eliminar", item)
    }

    const handleClosed = () => {
        setIsOpen(false)
        setLicene({})
    }

    return (
        <>
            <Table columns={columns} data={licences} onEdit={handleEdit} onDelete={handleDelete}/>
            {isOpen &&
                <Modal isOpen={isOpen} onClosed={handleClosed}>
                    <LicenceForm selectedItem={licence} onClosed={handleClosed}/>
                </Modal>
            }
        </>
    )
}