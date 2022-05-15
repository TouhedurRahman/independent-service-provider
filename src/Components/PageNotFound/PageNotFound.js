import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='not-found'>
            <img src="../images/not-found/4O4-not-found.png" alt="" />
            <br />
            <Link to='home'>
                <button className='home-btn'>Go to Home</button>
            </Link>
        </div>
    );
};

export default PageNotFound;