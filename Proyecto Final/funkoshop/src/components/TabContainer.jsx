import { useState } from 'react'
import { Products } from './Products.jsx'
import { Licences } from './Licences.jsx'
import { Categories } from './Categories.jsx'
import { Users } from './Users.jsx'

import './../styles/TabContainer.css'

export const TabContainer = () => {
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

    return (
        <div className='tab-container'>
            <div className='tab-buttons'>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={activeTab === index ? 'active' : ''}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='tab-content'>
                {tabs[activeTab].content}
            </div>
        </div>
    )
}

export default TabContainer