import { ProjectCard } from '../ProjectCard/ProjectCard.jsx'
import './ProjectGallery.css'

export const ProjectGallery = ({projects}) => {

    return (
        <div className='project_gallery'>
            {
                projects.map(project => (
                    <div className='project'>
                        <ProjectCard project={project}></ProjectCard>
                    </div>
                ))
            }
        </div>
    )
}