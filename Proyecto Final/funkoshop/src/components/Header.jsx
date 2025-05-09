import { useState } from 'react'
import { faBars, faChevronDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { Icon } from './Icon.jsx'

import './../styles/Header.css'

export const Header = ({categories}) => {
    const [isOpen, setIsOpen] = useState(false);  
    const toggleMenu = () => {
        console.log('click');
        setIsOpen(!isOpen);
    };
    const isAuthenticated = false

    return (
        <header className="page-header">
            <div className="container">
                <nav className="navbar">                    
                    <picture className="navbar__logo">
                        <Link to="/">                    
                            <img src="/images/branding/logo_light_horizontal.svg" alt="FunkoShop Logotipo"/>
                        </Link>
                    </picture>
                    <div className="navbar-toggle" id="navbarToggle" onClick={() => toggleMenu()}>
                        <Icon css='icon' icon={faBars}/>                           
                    </div>
                    <ul className={isOpen ? 'navbar__menu active' : 'navbar__menu'}>
                        <li className="navbar__item with-submenu">
                            <Link className="navbar__link with-icon">SHOP<Icon css='icon' icon={faChevronDown}/></Link>
                            <ul className="submenu">
                                {categories.map((category) =>(
                                    <li className="submenu__item" key={category.id}>
                                        <Link className="submenu__link" to={`/shop/${category.name}`}>{category.name}</Link>
                                    </li>
                                ))}                           
                            </ul>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/contact">CONTACTO</Link>                    
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
                                <li className="navbar__item">
                                    <button>auth</button>
                                </li>
                            </>  
                        }                  
                        <li className="navbar__item">
                            <Link className="navbar__item__cart" to="/cart"> <Icon css='icon' icon={faCartShopping} /></Link>                    
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};