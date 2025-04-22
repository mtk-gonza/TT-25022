import React from 'react'

export const Gallery = () => {

    const estilos = { display: 'flex', gap: '10px', justifyContent: 'Center', marginTop: '20px'}

    const images = [
        'https://placehold.co/400',
        'https://placehold.co/400',
        'https://placehold.co/400'
    ]

    return (
        <section style={estilos}>
            {
                images.map((src, index) => (
                    <img key={index} src={src} alt={`image ${index + 1}`}/>
                ))
            }
        </section>
    )
}
