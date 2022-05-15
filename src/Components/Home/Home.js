import React from 'react';
import { Link } from 'react-router-dom';
import useKacchi from '../../hooks/useKacchi';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [kacchis] = useKacchi();

    return (
        <div>
            <Banner></Banner>
            <div className="kacchi-container">
                <h1 className='text-center text-primary mt-3 mb-0'>Kacchi</h1>
                <div className='display-kacchi'>
                    {
                        kacchis.map(kacchi => <Services
                            key={kacchi.id}
                            kacchi={kacchi}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;