import React, { useState } from 'react'

import { Container } from './../common/Container.jsx'
import { Table } from './../common/Table.jsx'
import { Modal } from './../common/Modal.jsx'
import { ProductForm } from '../common/ProductForm.jsx'

import { useProducts } from '../../hooks/useProducts.jsx'

export const Products = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [product, setProduct] = useState({})
    const { products } = useProducts()

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
                    <ProductForm selectedItem={product} onClosed={handleClosed}/>
                </Modal>
            }
        </Container>
    )
}