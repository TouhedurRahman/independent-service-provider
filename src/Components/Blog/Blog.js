import React from 'react';
import Footer from '../Footer/Footer';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='qna'>
                <div>
                    <h1 className='question'>Difference between authorization and authentication.</h1>
                    <h4 className='answer'>
                        Authorization is that what resources a user has to access and authentication confirms the identity of the user. Authorization is not visible to or changeable by the user, authentication is visible to or changeable by the user. After completing the authentication it take place authorization. Authentication first step and authorization is the second step.
                        <br /> <br />
                        <h4 className='text-center'>== O ==</h4>
                    </h4>
                </div>
                <hr />
                <div>
                    <h1 className='question'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <h4 className='answer'>
                        Firebase helps to build suucessfull application, software or web apps. This helps to build backend server and authentication provided by google. Firebase provides many tools for tracking analytics, reporting and fixing app crashes.
                        The other options we can implement authentication, they are - <br />
                        1. Oracle Database <br />
                        2. Auth0 <br />
                        3. Neo4j <br />
                        4. MongoDB <br />
                        5. Octa <br />
                        6. JSON Web Token <br />
                        7. Couchbase Server etc.
                        <br /> <br />
                        <h4 className='text-center'> == O ==</h4>
                    </h4>
                </div>
                <div>
                    <h1 className='question'>What other services does firebase provide other than authentication?</h1>
                    <h4 className='answer'>
                        The other services does firebase provide other than authentication - <br />
                        1. Realtime Database. <br />
                        2. Cloud Firestore. <br />
                        3. Storage. <br />
                        4. Machine Learning. <br />
                        5. Hosting. <br />
                        6. Cloud Functions. <br />
                        <br /> <br />
                        <h4 className='text-center'> == O ==</h4>
                    </h4>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;