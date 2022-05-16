import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer-container'>
            <div className="footer-details">
                <div>
                    <h3>Food Mart</h3>
                    <h5>Our Head Office</h5>
                    <address>
                        Dattapara, Model Town <br />
                        Ashulia, Savar <br />
                        Dhaka, Bangladesh.
                    </address>
                    <h5>Phone: +880 1XXX-XXXXXX</h5>
                    <h5>Email: foodmart@gmail.com</h5>
                </div>
                <div className="get-app">
                    <h4>Get app on</h4>
                    <Link to="">
                        <img src="../images/app/google-play.png" alt="" />
                    </Link>
                    <Link to="">
                        <img src="../images/app/app-store.png" alt="" />
                    </Link>
                </div>
            </div>
            <hr className='w-75 mx-auto' />
            <div className='text-center'>
                <p><small>copyright © {year} All Rights Reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;