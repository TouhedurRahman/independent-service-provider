import React from 'react';
import useFastFood from '../../hooks/useFastFood';
import useKacchi from '../../hooks/useKacchi';
import Banner from '../Banner/Banner';
import FastFoodServices from '../Services/FastFoodServices';
import KacchiServices from '../Services/KacchiServices';
import './Home.css';

const Home = () => {
    const [kacchis] = useKacchi();
    const [fastFoods] = useFastFood();

    return (
        <div>
            <Banner></Banner>
            <div className="item-container">
                <h1 className='text-center text-primary mt-3 mb-0'>Kacchi</h1>
                <div className='display-item'>
                    {
                        kacchis.map(kacchi => <KacchiServices
                            key={kacchi.id}
                            kacchi={kacchi}
                        />)
                    }
                </div>
            </div>
            <div className="item-container">
                <h1 className='text-center text-primary mt-3 mb-0'>Fast Food</h1>
                <div className='display-item'>
                    {
                        fastFoods.map(fastFood => <FastFoodServices
                            key={fastFood.id}
                            fastFood={fastFood}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;