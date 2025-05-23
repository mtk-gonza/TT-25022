import { Navbar } from './Navbar.jsx'
import { Container } from './Container.jsx'

import './../styles/Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Navbar/>
            </Container>
        </div>
    )
}