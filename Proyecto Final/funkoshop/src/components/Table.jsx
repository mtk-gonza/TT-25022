import { Button } from './Button.jsx'

import './../styles/Table.css'

export const Table = ({ title, columns, onAdd = null, data, onMove = null, onEdit = null, onDelete = null }) => {
    return (
        <div className='table'>
            <h2 className='table__title'>{title}</h2>
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                        {(onMove || onEdit || onDelete) && (                           
                            <th>Acciones</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                                {columns.map((col) => (
                                    <td key={col.key}>{col.render ? col.render(row[col.key]) : row[col.key]}</td>
                                ))}
                                {(onMove || onEdit || onDelete) && (
                                    <td>                                    
                                        {onMove && <button onClick={() => onMove(row)} className='btn btn-move'>Movimientos</button>}
                                        {onEdit && <button onClick={() => onEdit(row)} className='btn btn-edit'>Editar</button>}
                                        {onDelete && <button onClick={() => onDelete(row.id)} className='btn btn-delete'>Eliminar</button>}                                    
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
            {onAdd && (
                <div className='table__actions'>
                    <Button onClick={onAdd} className='btn btn-add'>Agregar Nuevo</Button>
                </div>
            )}
        </div>
    )
}