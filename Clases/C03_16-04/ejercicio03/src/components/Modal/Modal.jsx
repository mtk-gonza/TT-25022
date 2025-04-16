import './Modal.css';

export const Modal = ({ isOpen, onClose, children, style = '' }) => {
    if (!isOpen) return null;
    return (
        <div className='modal' onClick={onClose}>
            <div className={'content__modal ' + style }onClick={(e) => e.stopPropagation()}>                    
                <div className='header__modal'>
                    <button className='btn_close' onClick={onClose}>×</button>
                </div>
                <div className='body__modal'>
                    {children}
                </div>
            </div>
        </div>
    );
};
