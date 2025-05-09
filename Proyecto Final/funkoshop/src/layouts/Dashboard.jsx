import { TabContainer } from './../components/TabContainer.jsx'

import './../styles/Dashboard.css'

export const Dashboard = ({categories}) => {  
    return (
        <div className='dashboard'>            
            <div className='container'>
                <h1>Bienvenido al Dashboard</h1>
                <TabContainer categories={categories}></TabContainer>
            </div>
        </div>
    );
};