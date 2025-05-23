import { Button } from './Button.jsx'
import { Paginator } from './Paginator.jsx'

import './../styles/Table.css'

export const Table = ({ 
    columns, 
    onAdd = null, 
    data, 
    onMove = null, 
    onEdit = null, 
    onDelete = null,
    pagination = null // Nuevo prop opcional
}) => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                        {(onMove || onEdit || onDelete) && <th>Acciones</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                {columns.map((col) => (
                                    <td key={col.key}>
                                        {col.render ? col.render(row[col.key]) : row[col.key]}
                                    </td>
                                ))}
                                {(onMove || onEdit || onDelete) && (
                                    <td>
                                        {onMove && (
                                            <button onClick={() => onMove(row)} className='btn btn-move'>
                                                Movimientos
                                            </button>
                                        )}
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

            {/* Paginador condicional */}
            {pagination && (
                <div className="table__pagination">
                    <Paginator
                        currentPage={pagination.currentPage}
                        totalPages={pagination.totalPages}
                        onPageChange={pagination.onPageChange}
                    />
                </div>
            )}

            {onAdd && (
                <div className='table__actions'>
                    <Button onClick={onAdd} className='btn btn-add'>Agregar Nuevo</Button>
                </div>
            )}
        </div>
    )
}