import { Table } from './Table.jsx'

import './../styles/Category.css'

export const Category = ({categories}) => {

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'parent', label: 'Categoría Padre' },
        { key: 'created_at', label: 'Fecha de Creación' }
    ];

    const handleEdit = (item) => {
        console.log("Editar", item);
        // Lógica para abrir modal/formulario de edición
    };

    const handleDelete = (item) => {
        console.log("Eliminar", item);
        // Lógica para eliminar (confirmación, llamada a la API, etc.)
    };

    return (
        <Table title='Categorias' data={categories} columns={columns} onEdit={handleEdit} onDelete={handleDelete}/>
    );
};