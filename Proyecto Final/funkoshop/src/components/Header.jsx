import { Container } from './Container.jsx'
import { Navbar } from './Navbar.jsx'

import './../styles/Header.css'

export const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Navbar />
            </Container>
        </header>
    )
}