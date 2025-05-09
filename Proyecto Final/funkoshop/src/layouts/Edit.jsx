import { useParams, Link } from 'react-router-dom'

import './../styles/Edit.css'

export const Edit = () => {
    const { table } = useParams();
    const Item = () => {
        switch (table) {
            case 'categories':
                return <div>categories</div>         
            case 'licences':
                return <div>licences</div>  
            case 'products':
                return <div>products</div>  
            case 'roles':
                return <div>roles</div>  
            case 'users':
                return <div>users</div>  
            default:
                return <div className='container'>No se encontró un componente para {table}</div>;
        }
    };
    return (
        <div className="container">  
            <Item>            
            </Item>  
            <Link to='/dashboard/admin' className='edit__back'>Volver</Link>                      
        </div>
    )
}