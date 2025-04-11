import './Button.css';

export const Button = ({ children, onClick, type = 'button', className = '' }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};