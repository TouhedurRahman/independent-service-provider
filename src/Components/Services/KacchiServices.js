import React from 'react';
import './KacchiServices.css';

const KacchiServices = ({ kacchi }) => {
    const { name, image, price, description } = kacchi;

    return (
        <div className='kaccchi-service'>
            <img className='pt-3 rounded-3' src={image} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <div className='d-flex justify-content-between ms-4 me-4'>
                <button className='btn btn-primary'>See Deatails</button>
                <button className='btn btn-primary'>Order Now</button>
            </div>
        </div>
    );
};

export default KacchiServices;