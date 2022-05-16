import React from 'react';
import './PageNotFound.css';
import CustomLink from '../CustomLink/CustomLink';
import Footer from '../Footer/Footer';

const PageNotFound = () => {
    return (
        <div>
            <div className='not-found'>
                <img src="../images/not-found/4O4-not-found.png" alt="" />
                <br />
                <CustomLink to='home'>
                    <button className='home-btn'>Go to Home</button>
                </CustomLink>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;