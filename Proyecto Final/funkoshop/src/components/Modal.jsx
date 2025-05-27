import React from 'react'

import './../styles/Modal.css'

export const Modal = ({ isOpen, onClose, title = null, children }) => {
    if (!isOpen) return null

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <button className='modal__btn-close' onClick={onClose}>
                    ×
                </button>
                <div className='modal__body'>
                    {children}
                </div>
            </div>
        </div>
    )
}