import React, { useState } from 'react'

import { Container } from './../common/Container.jsx'
import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { ProductForm } from '../common/ProductForm.jsx'

import { useProducts } from '../../hooks/useProducts.jsx'

export const Products = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState({})
    const { products, loadProducts, deleteProduct } = useProducts()

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'sku', label: 'Código' },
        { key: 'price', label: 'Precio' },
        { key: 'stock', label: 'Stock' }
    ]

    const handleEdit = (item) => {
        setProduct(item)
        setIsOpen(true)
    }

    const handleDelete = (item) => {
        console.log('Eliminar', item)
        const confirm = window.confirm(`¿Estas seguro de eliminar producto: ${item.name}`)
        if (confirm) {
            try {                
                deleteProduct(item.id)
                loadProducts()
                //if (response) alert('Usuario eliminado exitosamente')
            } catch (err) {
                console.error(err)
            }
        }
    }

    const handleClosed = () => {
        setIsOpen(false)
        setProduct({})
    }

    return (
        <Container>
            <Table columns={columns} data={products} onEdit={handleEdit} onDelete={handleDelete} />
            {isOpen &&
                <Modal isOpen={isOpen} onClosed={handleClosed}>
                    <ProductForm selectedItem={product} onClosed={handleClosed} />
                </Modal>
            }
        </Container>
    )
}