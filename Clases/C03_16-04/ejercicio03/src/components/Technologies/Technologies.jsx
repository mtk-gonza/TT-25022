import { useState } from 'react'
import { Modal } from './../Modal/Modal.jsx'
import './Technologies.css'

export const Technologies = ({technologies}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTechnology, setSelectedTechnology] = useState(null);

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleTechnology = () => {
        setSelectedTechnology(technologies)
        setIsOpen(true)
        console.log(selectedTechnology)
    }

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedTechnology(null);
    }

    return (
        <>
            <button onClick={handleIsOpen}>Tecnologias</button>
            <Modal isOpen={isOpen} onClose={handleCloseModal} title='Tecnologias'>
                <ul>
                    {
                        technologies.map(tecnology => (
                            <li>{tecnology}</li>
                        ))
                    }
                </ul>
            </Modal>
        </>
    )
}