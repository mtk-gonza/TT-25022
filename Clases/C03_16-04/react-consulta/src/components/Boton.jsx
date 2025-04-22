export const Boton = ({color, texto}) => {

    const estilo = { backgroundColor: color, color: 'white' }

    return (
        <button style={estilo}>
            {texto}
        </button>
    )
}