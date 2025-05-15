import React, { useContext } from 'react'
import { Table } from './Table.jsx'
import { ProductsContext } from './../context/ProductsContext.jsx'

import './../styles/Category.css'

export const Category = () => {
    const { categories } = useContext(ProductsContext)
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'description', label: 'Descripción' },
        { key: 'createdAt', label: 'Fecha de Creación' },
        { key: 'updatedAt', label: 'Fecha de Actualización' }
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