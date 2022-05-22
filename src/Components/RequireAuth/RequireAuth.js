import React from 'react';
import './RequireAuth.css';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';

const RequireAuth = ({ children }) => {
    const [
        user,
        loading
    ] = useAuthState(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);

    let location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div className='text-center'>
                <div className='m-3 mx-auto'>
                    <img style={
                        {
                            borderRadius: '50%',
                            width: '300px',
                            height: '150px'
                        }
                    }
                        src="../images/email/email.jpg" alt="email-notification" />
                </div>
                <div>
                    <h1 className='text-success'>Please, Verify your Account</h1>
                    <div className="mx-auto m-3" style={{ maxWidth: '280px', }}>
                        <p>
                            Thanks for signup with us.
                            <br />
                            Your account is <span className='text-danger'>not verified</span> yet.
                            <br />
                            Please Cheak your email
                            <br />
                            <span className='text-danger'>
                                ({user.email})
                            </span>
                            <br />
                            and verify your account.
                            If you don't get any verification email, click the button bellow to get verification email again.
                        </p>
                    </div>
                    <button onClick={
                        async () => {
                            await sendEmailVerification();
                            toast('Email sent!');
                        }
                    } class="resend-email-btn">Re-send Verification</button>
                    <div className="mx-auto mt-3 mb-5" style={{ maxWidth: '280px', }}>
                        <p>
                            If this email wasn't intended for you feel free to delete it, Thak you.
                        </p>
                    </div>
                    <ToastContainer />
                    <Footer></Footer>
                </div>
            </div>
        )
    }

    return children;
};

export default RequireAuth;