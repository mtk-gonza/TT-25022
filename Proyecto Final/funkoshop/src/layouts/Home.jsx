import { useCombinedContexts } from './../../hooks/useCombineContexs.js'
import { Hero, Collection, Slider } from './../../components/index.js';
import { news } from './../../utils/news.js';

import './../styles/Home.css'

export const Home = () => {
    const { products, licences } = useCombinedContexts()
    const latestReleases = products?.filter(product => news(product.createdAt)) || [];

    return (
        <>         
            <Hero />
            <main className="main-container">
                <div className="container">
                    {licences.map((licence, index) => (
                        <Collection 
                            key={licence.id}
                            licence={licence}
                            nameClass={index % 2 === 0 ? 'collection__cover__par' : 'collection__cover'}
                        />
                    ))}
                </div>
                <Slider products={latestReleases} />
            </main>      
        </>
    );
};