import React, { useState } from 'react'

import { Button } from './Button.jsx'
import { Paginator } from './Paginator.jsx'

import './../styles/Table.css'

export const Table = ({columns, data, onEdit = null, onDelete = null}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5 
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                        {(onEdit || onDelete) && <th>Acciones</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        currentData.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                {columns.map((col) => (
                                    <td key={col.key}>
                                        {col.render ? col.render(row[col.key]) : row[col.key]}
                                    </td>
                                ))}
                                {(onEdit || onDelete) && (
                                    <td>
                                        {onEdit && (
                                            <button onClick={() => onEdit(row)} className='btn btn-edit'>
                                                Editar
                                            </button>
                                        )}
                                        {onDelete && (
                                            <button onClick={() => onDelete(row.id)} className='btn btn-delete'>
                                                Eliminar
                                            </button>
                                        )}
                                    </td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length}>Cargando datos...</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {totalPages > 1 && (
                <div className='table__pagination'>
                    <Paginator
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(newPage) => setCurrentPage(newPage)}
                    />
                </div>
            )}
        </div>
    )
}