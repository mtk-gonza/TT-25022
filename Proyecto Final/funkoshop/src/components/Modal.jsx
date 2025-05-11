import './../styles/Modal.css'

export const Modal = ({ isOpen, onClose, title = null, children }) => {
    if (!isOpen) return null

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <button className='close-button' onClick={onClose}>
                    ×
                </button>
                <div className='modal-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}