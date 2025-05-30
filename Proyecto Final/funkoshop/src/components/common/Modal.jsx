import React from 'react'

import './../../styles/components/common/Modal.css'

export const Modal = ({ isOpen, onClosed, title = null, children }) => {
    if (!isOpen) return null

    return (
        <div className='modal' onClick={onClosed}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <button className='modal__btn-close' onClick={onClosed}>
                    ×
                </button>
                <div className='modal__body'>
                    {children}
                </div>
            </div>
        </div>
    )
}