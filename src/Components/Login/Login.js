import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errorElement;

    if (error) {
        errorElement = <p className='text-denger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleOnSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent!');
        }
        else {
            toast("Plaease enter your email address!");
        }
    }

    return (
        <div>
            <div className='w-50 mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
                <form onSubmit={handleOnSubmit}>
                    <h1 className='text-center text-primary'>Login</h1>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email address</label>
                        <input type="email" ref={emailRef} class="form-control" id="exampleInputEmail" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword" class="form-label">Password</label>
                        <input type={passwordShown ? "text" : "password"} ref={passwordRef} class="form-control" id="exampleInputPassword" required />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" onClick={togglePassword} id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                {errorElement}
                <p>
                    Forget password?<button className='btn btn-link text-primary text-decoration-none pe-auto' onClick={resetPassword}>Reset Password</button>
                </p>
                <p>
                    New to Food Mart? <Link to="/register" className='text-primary text-decoration-none pe-auto' onClick={navigateRegister}>Please Register</Link>
                </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;