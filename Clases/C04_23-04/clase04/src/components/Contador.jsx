import React, { useState } from 'react'

import './../styles/Contador.css'

export const Contador = () => {
    const [contador, setContador] = useState(0);
    console.log(useState)
    return (
        <div className='contador'>
            <p>Valor del contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
        </div>
    );
} 