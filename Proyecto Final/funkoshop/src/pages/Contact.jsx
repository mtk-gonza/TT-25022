import React from 'react'

import { Main } from './../components/common/Main.jsx'
import { Container } from './../components/common/Container.jsx'

import './../styles/pages/Contact.css'

export const Contact = () => {
    return (   
        <Main className='contact'>
            <Container>
                <h2>Contáctenos</h2>
                <h5>Datos de contacto</h5>
                <p><strong>Dirección postal:</strong>Chacabuco 1299 Oficina 4 Ramos Mejía (B1704FFY), Buenos Aires, Argentina</p>
                <p><strong>Teléfonos:</strong>(+54-11) 4460-1500/3979-7961</p>
                <p><strong>WhatsApp:</strong>+54 9 11 2740-4502</p>
                <p><strong>Sitio Web:</strong>www.funkoshop.com</p>
                <p><strong>E-mail:</strong>comercial@funkoshop.com</p>
                Formulario de Contacto
                Por favor complete el formulario para dejar su consulta o comentario.
            </Container>
        </Main>
    )
}