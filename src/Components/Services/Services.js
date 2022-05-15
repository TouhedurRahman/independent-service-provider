import React from 'react';
import './Services.css';
import useFastFood from '../../hooks/useFastFood';
import useIceCream from '../../hooks/useIceCream';
import useKacchi from '../../hooks/useKacchi';
import Service from '../Service/Service';

const Services = () => {
    const [kacchis] = useKacchi();
    const [fastFoods] = useFastFood();
    const [iceCreams] = useIceCream();

    return (
        <div>
            <div className="item-container">
                <h1 className='text-center text-primary mt-3 mb-0'>Kacchi</h1>
                <div className='display-item'>
                    {
                        kacchis.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
            <div className="item-container">
                <h1 className='text-center text-primary mt-3 mb-0'>Fast Food</h1>
                <div className='display-item'>
                    {
                        fastFoods.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
            <div className="item-container">
                <h1 className='text-center text-primary mt-3 mb-0'>Ice Cream</h1>
                <div className='display-item'>
                    {
                        iceCreams.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;