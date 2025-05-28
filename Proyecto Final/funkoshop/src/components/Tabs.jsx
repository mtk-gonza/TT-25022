import React, { useState } from 'react'

import { Products } from './Products.jsx'
import { Licences } from './Licences.jsx'
import { Categories } from './Categories.jsx'
import { Users } from './Users.jsx'
import { Container } from './Container.jsx'

import './../styles/Tabs.css'

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            label: 'Productos',
            content: <Products />
        },        {
            label: 'Licencias',
            content: <Licences />
        },
        {
            label: 'Categorias',
            content: <Categories />
        },
        {
            label: 'Usuarios',
            content: <Users />
        }
    ]

    const handlerAdd = () => {
        switch (tabs[activeTab].label) {
            case 'Productos':
                console.log('Productos')
                break
            case 'Licencias':
                console.log('Licencias')
                break
            case 'Categorias':
                console.log('Categorias')
                break
            case 'Usuarios':
                console.log('Usuarios')
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
                            <button className='btn-add' onClick={handlerAdd}>Agregar</button>
                        </div>
                    </div>
                    <div className='tab-content'>
                        {tabs[activeTab].content}
                    </div>
                </div>
            </Container>
        </div>
    )
}