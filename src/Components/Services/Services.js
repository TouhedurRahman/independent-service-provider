import React from 'react';
import "./Services.css";

const Services = ({ kacchi }) => {
    const { name, image, price, description } = kacchi;

    return (
        <div className='service'>
            <img className='pt-3 rounded-3' src={image} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <button className='btn btn-primary'>Order Now</button>
        </div>
    );
};

export default Services;