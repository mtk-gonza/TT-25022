
import './../styles/Navbar.css'

export const Navbar = ({ isAuthenticated, logout }) => {

    return (
        <div className='navbar'>
            <div className='container__navbar'>
                <div className='logo__navbar'>
                    <img src='/images/logoblanco.png' alt='logo de la provincia' />
                </div>
                <div className='title__navbar'>
                    <h2>SG Inventory</h2>
                </div>
                <div className='auth__navbar'>
                    {isAuthenticated ? (
                        <Button className='btn_cerrar navbar__link' onClick={logout}>CERRAR SESIÓN</Button>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}