import './../styles/ProjectCard.css'

export const ProjectCard = ({project}) => {
    const handleOnClick = () => {
        console.log(`Explorando: ${project.titulo}.`)
    }
    return (
        <div className='project_card'>
            <h2>{project.titulo}</h2>
            <span>{project.descripcion}</span>
            <button onClick={handleOnClick}>{project.botonTexto}</button>
        </div>
    )
}