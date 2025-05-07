import { useCombinedContexts } from './../../hooks/useCombineContexs.js';
import { TabContainer } from './../../components/TabContainer/TabContainer.jsx';

import './../styles/Dashboard.css'

export const Dashboard = () => {  
    const { categories } = useCombinedContexts() 
    return (
        <div className='dashboard'>            
            <div className='container'>
                <h1>Bienvenido al Dashboard</h1>
                <TabContainer categories={categories}></TabContainer>
            </div>
        </div>
    );
};