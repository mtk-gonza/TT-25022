import React, { useState } from 'react'

import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { Message } from './../common/Message.jsx'
import { LicenceForm } from '../forms/LicenceForm.jsx'

import { useLicences } from '../../hooks/useLicences.jsx'
import { useConfirm } from './../../hooks/useConfirm.jsx'
import { useWarning } from './../../hooks/useWarning.jsx'

export const Licences = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [licence, setLicene] = useState({})
    const { licences, deleteLicence } = useLicences()
    const { isOpenConfirm, message, title, confirm, onConfirm, onCancel } = useConfirm()
    const { isOpenWarning, warning, titleWarning, messageWarning, handleClosedWarning } = useWarning()

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'created_at', label: 'Fecha de Creación' },
        { key: 'updated_at', label: 'Fecha de Actualización' }
    ]

    const handleEdit = (item) => {
        setLicene(item)
        setIsOpen(true)
    }

    const handleDelete = async (item) => {
        const confirmed = await confirm(`¿Estás seguro de eliminar la Licencia: ${item.name}?`, 'Eliminar Licencia')
        if (confirmed) {
            try {
                const response = await deleteLicence(item.id)
                if (response) warning('Eliminada exitosamente', `La Licencia: ${item.name} fue eliminada.`)
            } catch (err) {
                warning('Error al intentar Eliminar',`Error: ${err.message}`)
                console.error(err)
            }
        }
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
            {isOpenConfirm && (
                <Message
                    isOpen={isOpenConfirm}
                    title={title}
                    message={message}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    isConfirm={true}
                />
            )}
            {isOpenWarning && (
                <Message
                    isOpen={isOpenWarning}
                    title={titleWarning}
                    message={messageWarning}
                    onCancel={handleClosedWarning}
                    isConfirm={false}
                />
            )}
        </>
    )
}