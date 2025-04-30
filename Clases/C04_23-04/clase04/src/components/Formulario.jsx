import React, { useState } from 'react'
import { Modal } from './Modal.jsx'

import './../styles/Formulario.css'

export const Formulario = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handlerClick = (evento) => {
        evento.preventDefault();
        alert(`Formulario enviado por: ${name}`)
        setName('')
    }

    return (
        <>
            <div className='container_form'>
                <button className='btn_form' onClick={handleIsOpen}>
                    Formulario
                </button>
            </div>
            <Modal
                isOpen={isOpen} 
                onClose={handleCloseModal} 
                title='Formulario'
            >
                <form onSubmit={handlerClick} className='formulario'>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Ingresa tu nombre'
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </Modal>
        </>
    )
} 