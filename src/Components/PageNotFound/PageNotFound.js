import React from 'react';
import './PageNotFound.css';
import CustomLink from '../CustomLink/CustomLink';

const PageNotFound = () => {
    return (
        <div className='not-found'>
            <img src="../images/not-found/4O4-not-found.png" alt="" />
            <br />
            <CustomLink to='home'>
                <button className='home-btn'>Go to Home</button>
            </CustomLink>
        </div>
    );
};

export default PageNotFound;