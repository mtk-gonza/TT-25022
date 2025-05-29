import { useState } from 'react'

import { Products } from './Products.jsx'
import { Licences } from './Licences.jsx'
import { Categories } from './Categories.jsx'
import { Users } from './Users.jsx'
import { Container } from './Container.jsx'
import { Modal } from './Modal.jsx'
import { ProductForm } from './ProductForm.jsx'

import './../styles/Tabs.css'

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [modalToShow, setModalToShow] = useState(null)

    const tabs = [
        { label: 'Productos', content: <Products /> }, 
        { label: 'Licencias', content: <Licences /> },
        { label: 'Categorias', content: <Categories /> },
        { label: 'Usuarios', content: <Users /> }
    ]

    const handleAdd = () => {
        setIsOpen(true)
        switch (tabs[activeTab].label) {
            case 'Productos':
                setModalToShow('product')
                break
            case 'Licencias':
                setModalToShow('licence')
                break
            case 'Categorias':
                setModalToShow('category')
                break
            case 'Usuarios':
                setModalToShow('user')
                break
            default:
                console.log('error')
                break
        }
    }

    return (
        <div className='tabs'>
            <Container>
                <div className='tabs__content'>
                    <div className='tabs__header'>
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={activeTab === index ? 'active' : ''}
                            >
                                {tab.label}
                            </button>
                        ))}
                        <div className='tab__add'>
                            <button className='btn-add' onClick={handleAdd}>Agregar</button>
                        </div>
                    </div>
                    <div className='tab-content'>
                        {tabs[activeTab].content}
                    </div>
                </div>
            </Container>
            {isOpen && 
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {modalToShow === 'product' && <ProductForm />}
                    {modalToShow === 'licence' && <p>Licencia</p>}
                    {modalToShow === 'category' && <p>categoria</p>}
                    {modalToShow === 'user' && <p>Usuario</p>}
                </Modal> 
            }
        </div>
    )
}