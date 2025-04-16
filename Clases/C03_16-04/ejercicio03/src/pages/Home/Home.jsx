import { ProjectGallery } from './../../components/ProjectGallery/ProjectGallery.jsx'
import { TalentoLabTeam } from './../../components/TalentoLabTeam/TalentoLabTeam.jsx'
import { Technologies } from './../../components/Technologies/Technologies.jsx'
import './Home.css';

export const Home = () => {   
    const equipo = [
        { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://cdn.gamma.app/5k42ay5jcl12uau/1d0d81fce02b4ef887146f604d15277c/original/AD_4nXfDpAydLg1EssNvMi2Lw9EZV6PsOWAjfm9MuNBQPAHSZCNWhZSBp7x7E52Y4DRgXeaYTODkw4u7frcryr8DExBMzjTm80wsUxzMb0gtuH3xIlWKza3DcTD_UHVZ7cszf7QycSbo9pbqzP9Dq_5u_0g.png' },
        { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://cdn.gamma.app/5k42ay5jcl12uau/0a6d68f324a042c6818e91fb8fd985c4/original/AD_4nXfBc4AJvXyq3yWNZf5YbdybgFILbs9b3qRumcuTyVr6BU8c4i7ODLdtjdjlrnQ6W2Qw4e2tYMdEO61DG2nVtCiZdVxoSDZ9N2DYFxnmujo9knt9BM_eE3qB4RisFmv7_OkgUB-Zjep7grG9eelJRNA.png'},
        { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://cdn.gamma.app/5k42ay5jcl12uau/9c1b14761a1d4d108fbc8e26d5df97fe/original/AD_4nXf4AJUPnQNgrCWKwJGW5Wqq3myTPm4VibVHkg6B_JUvmelCEk6Ya4L_reALJFo-deMMZhlhXokyfudtYmbzsOlWcJt9bEkQelE7YpxP4oixpXIxgap8bIq69zM6bQU_FCMfRInjQo-oDC9b0I4t3Q.png'},
        { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://cdn.gamma.app/5k42ay5jcl12uau/1d0d81fce02b4ef887146f604d15277c/original/AD_4nXfDpAydLg1EssNvMi2Lw9EZV6PsOWAjfm9MuNBQPAHSZCNWhZSBp7x7E52Y4DRgXeaYTODkw4u7frcryr8DExBMzjTm80wsUxzMb0gtuH3xIlWKza3DcTD_UHVZ7cszf7QycSbo9pbqzP9Dq_5u_0g.png'}
    ]

    const projects = [
        { titulo: 'Plataforma de Gestión', descripcion: 'Una herramienta para optimizar la gestión de equipos.', botonTexto: 'Explorar proyecto' },
        { titulo: 'Sistema de inventario', descripcion: 'Una herramienta para controlar el stock disponible.', botonTexto: 'Saber más' },
        { titulo: 'E-Commerce', descripcion: 'Una herramienta para tienda online', botonTexto: 'ver más' },
    ]

    const intereses = ['React', 'JavaScript', 'Python', 'Diseño UX', 'Nodejs'];
    
    return (
        <div className='home'>
            <div className='container'>
                <h1>Bienvenido a Talento Tech Lab</h1>
                <ProjectGallery projects={projects}/>
                <TalentoLabTeam members={equipo}/>
                <Technologies technologies={intereses}/>
            </div>
        </div>
    );
};