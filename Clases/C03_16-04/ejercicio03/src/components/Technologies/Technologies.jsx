import { useState } from 'react'
import { Modal } from './../Modal/Modal.jsx'
import './Technologies.css'

export const Technologies = ({technologies}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalStyle, setModalStyle] = useState(null); 

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleModalStyle = (technology) => {
        setModalStyle(technology.toLowerCase()); 
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setModalStyle(null);
    }

    return (
        <>
            <div className='container_tecno'>
                <button className='btn_tecnology' onClick={handleIsOpen}>Tecnologias</button>
            </div>
            <Modal 
                isOpen={isOpen} 
                onClose={handleCloseModal} 
                title='Tecnologias'
                style={modalStyle}
            >
                <ul className='technologies'>
                    {
                        technologies.map((technology, index) => (
                            <li key={index} onClick={() => handleModalStyle(technology)}>{technology}</li>
                        ))
                    }
                </ul>
            </Modal>
        </>
    )
}