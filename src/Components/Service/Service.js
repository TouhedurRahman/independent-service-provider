import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, image, price, description } = service;

    return (
        <div className='item-service'>
            <img className='pt-3 rounded-3' src={image} alt="" />
            <h2>{name}</h2>
            <p className='ps-3 pe-3'><small>{description}</small></p>
            <p>Price: {price}</p>
            <Link to="/checkout">
                <button className='btn btn-primary'>Order Now</button>
            </Link>
        </div>
    );
};

export default Service;