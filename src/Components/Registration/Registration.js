import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        console.log('user', user);
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            alert('Updated profile');
            navigate('/home');
        }
        else {
            toast("Password and confirm password doesn't  same!");
        }
    }

    return (
        <div>
            <div className='w-50 mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
                <form onSubmit={handleRegister}>
                    <h1 className='text-center text-primary'>Please Register</h1>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Name</label>
                        <input type="text" name="name" class="form-control" id="exampleInputName" placeholder="Full Name" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail" class="form-label">Email address</label>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail" placeholder="abc@gmail.com" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type={passwordShown ? "text" : "password"} name="password" class="form-control" id="exampleInputPassword1" placeholder="********" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                        <input type={passwordShown ? "text" : "password"} name="confirmPassword" class="form-control" id="exampleInputPassword2" placeholder="********" required />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" onClick={togglePassword} id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>

                <p>
                    Already have an account? <Link to="/login" className='text-danger text-decoration-none pe-auto' onClick={navigateLogin}>Please Login</Link>.
                </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Registration;