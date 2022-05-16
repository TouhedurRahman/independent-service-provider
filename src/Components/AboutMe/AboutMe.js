import React from 'react';
import Footer from '../Footer/Footer';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <div className='about-me border border-success w-75 mt-5 mb-5 mx-auto p-3' style={{ borderRadius: "30px" }}>
                < div className='about-myself'>
                    <img className='p-3' style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="../images/about-me/touhed.jpg" alt="Profile Pic..." />
                    <div className='p-3'>
                        <h3>Touhedur Rahman Khan</h3>
                        <h5>BSc. in Computer Science and Engineering</h5>
                        <h5>Daffodil International University</h5>
                        <h5>Ashulia, Savar, Dhaka</h5>
                    </div>
                </div >
                <div className='w-75 border border-success mx-auto p-3' style={{ borderRadius: "30px" }}>
                    <h1 className='text-center'>Future Goals</h1>
                    <div>
                        <p>1. Firstly I want to complete my BSc. successfully.</p>
                        <p>2. Then I want to complete my MSc. Program.</p>
                        <p>3. I want to develop my skill in web development sector.</p>
                        <p>4. I want to work as a software developer in a repoted national and multinational company.</p>
                        <p>5. I want to build my won software firm.</p>
                        <h3 className='text-center'>== O ==</h3>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;