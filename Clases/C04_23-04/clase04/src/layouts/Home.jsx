import { ProjectGallery } from '../components/ProjectGallery.jsx'
import { TalentoLabTeam } from '../components/TalentoLabTeam.jsx'
import { Technologies } from '../components/Technologies.jsx'
import { Contador } from '../components/Contador.jsx'
import { Formulario } from '../components/Formulario.jsx'

import { equipo, projects, intereses } from './../utils/data.js'

import './../styles/Home.css'

export const Home = () => {  

    return (
        <div className='home'>
            <div className='container'>
                <h1>Bienvenido a Talento Tech Lab</h1>
                <ProjectGallery projects={projects}/>
                <TalentoLabTeam members={equipo}/>
                <Technologies technologies={intereses}/>
                <Contador />
                <Formulario />
            </div>
        </div>
    )
}