import { Link } from 'react-router-dom'

import './../styles/Footer.css'

export const Footer = () => { 
    const isAuthenticated  = false
    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/pages/shop">SHOP</Link>
                    </li> 
                    {!isAuthenticated ? 
                        <>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/login">LOGIN</Link>
                            </li>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/register">REGISTER</Link>
                            </li>                 
                        </>
                    :   
                        <>
                            <li className="navbar__item">
                                <Link className="navbar__link" to="/dashboard">DASHBOARD</Link>
                            </li> 
                        </>        
                    }                   
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/pages/contact">CONTACTO</Link>
                    </li>
                </ul>
                <picture>
                    <img src="/images/branding/isotype.svg" alt="Isotipo de la marca FunkoShop"/>    
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2025 - FunkoShop of Gonzalo Gonzalez &copy;</p>      
        </footer>
    )
}