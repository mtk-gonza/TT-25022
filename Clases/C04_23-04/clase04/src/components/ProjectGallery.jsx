import { ProjectCard } from './ProjectCard.jsx'
import './../styles/ProjectGallery.css'

export const ProjectGallery = ({projects}) => {

    return (
        <div className='project_gallery'>
            {
                projects.map((project, index) => (
                    <div className='project' key={index}>
                        <ProjectCard project={project}></ProjectCard>
                    </div>
                ))
            }
        </div>
    )
}